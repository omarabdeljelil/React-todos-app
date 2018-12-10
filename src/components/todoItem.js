import React from "react";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }
  completeTodo(id) {
    this.props.completeTodo(id);
  }

  render() {
    return (
      <div className={this.getItemClasses()}>
        <button
          className="removeTodo"
          onClick={e => this.removeTodo(this.props.id)}
        >
          remove
        </button>
        <button
          className={this.getBtnClasses()}
          onClick={e => this.completeTodo(this.props.id)}
        >
          complete
        </button>
        {this.props.todo.text}
      </div>
    );
  }

  getItemClasses() {
    let classes = "todoWrapper ";
    classes += this.props.todo.status === 1 ? "completed" : " ";
    return classes;
  }
  getBtnClasses() {
    let classes = "completeTodo ";
    classes += this.props.todo.status === 1 ? "hideBtn" : " ";
    return classes;
  }
}
