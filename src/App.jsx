import React from "react";
import "./App.css";
import InputForm from "./FormInput/InputForm";
import TodoList from "./TodoList/TodoList";

class App extends React.Component {


  state = {
    todos: []
  }

    render() {
        return (
            <div className="app">
                <InputForm />
                <TodoList todos={this.todos} />
            </div>
        );
    }
}

export default App;
