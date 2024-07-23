import "./App.css";
import React from "react";
import FormInput from "./FormInput/FormInput";
import TodoList from "./TodoList/TodoList";
import { TodoType, VisibilityType } from "./utilities/constants";
import VisibiltyToolbar from "./VisibiltyToolbar/VisibiltyToolbar";
import { Button } from "react-bootstrap";

class App extends React.Component {
    state = {
        todos: [],
        visibility: VisibilityType.ALL,
    };

    componentDidMount() {
        // Load todos from localStorage when the component mounts
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            this.setState({ todos: JSON.parse(savedTodos) });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // Save todos to localStorage whenever they change
        if (prevState.todos !== this.state.todos) {
            localStorage.setItem("todos", JSON.stringify(this.state.todos));
        }
    }

    handleNewTodo = (newTodo) => {
        const newTodos = [...this.state.todos, newTodo];
        this.setState({ todos: newTodos });
    };

    handleTodoChange = (id, type) => {
        const { todos } = this.state;

        let newTodos = null;
        if (type === TodoType.TOGGLE_COMPLETED) {
            newTodos = todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        } else if (type === TodoType.DELETE) {
            newTodos = todos.filter((todo) => todo.id !== id);
        }

        this.setState({ todos: newTodos });
    };

    handleVisibiltyChange = (type) => {
        this.setState({ visibility: type });
    };

    getVisibleTodos = () => {
        const { visibility, todos } = this.state;

        if (visibility === VisibilityType.ACTIVE) {
            return todos.filter((todo) => !todo.completed);
        } else if (visibility === VisibilityType.COMPLETED) {
            return todos.filter((todo) => todo.completed);
        } else {
            return todos;
        }
    };

    handleRemoveCompleted = () => {
        const newTodos = this.state.todos.filter((todo) => !todo.completed);
        this.setState({ todos: newTodos });
    };

    render() {
        const visibleTodos = this.getVisibleTodos();
        const hasCompletedTodos = this.state.todos.find(
            (todo) => todo.completed
        );

        return (
            <div className="app">
                <VisibiltyToolbar
                    onVisibiltyChange={this.handleVisibiltyChange}
                />
                <FormInput handleFormSubmit={this.handleNewTodo} />
                <TodoList
                    todos={visibleTodos}
                    onTodoChange={this.handleTodoChange}
                />
                {hasCompletedTodos && (
                    <Button onClick={this.handleRemoveCompleted}>
                        Clear completed
                    </Button>
                )}
            </div>
        );
    }
}

export default App;
