import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import TodoInput from "./components/todoInput";
import TodoItem from "./components/todoItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 0, text: "Make a React App", status: 1 },
        { id: 1, text: "Learn Vue.js", status: 0 },
        { id: 2, text: "Learn Angular 6", status: 0 }
      ],
      nextId: 3
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({ id: this.state.nextId, text: todoText, status: 0 });
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }

  completeTodo(id) {
    const todos = [...this.state.todos];
    todos[id].status++;
    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {this.state.todos.map(todo => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  id={todo.id}
                  removeTodo={this.removeTodo}
                  completeTodo={this.completeTodo}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
