import React from "react";
import "./App.css";
import InputForm from "./FormInput/InputForm";
import TodoList from "./TodoList/TodoList";

class App extends React.Component {
    state = {
        todos: [],
    };

    handleNewTodo = (newTodo) => {
        this.setState({
            todos: [...this.state.todos, newTodo],
        });
    };

    handleTodoCompletedChange = (id) => {
        let newTodos = null;
        if (type === "COMPLETED") {
            newTodos = this.state.todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        } else {
          
        }
        this.setState({ todos: newTodos });
    };

    render() {
        return (
            <div className="app">
                <InputForm handleFormSubmit={this.handleNewTodo} />
                <TodoList
                    todos={this.state.todos}
                    onTodoChange={this.handleTodoCompletedChange}
                />
            </div>
        );
    }
}

export default App;
