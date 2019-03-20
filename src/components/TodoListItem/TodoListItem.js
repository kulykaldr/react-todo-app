import React, { Component } from "react";

import "./TodoListItem.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
    style: {
      color: "black",
      fontWeight: "normal"
    }
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };

  onExclamationClick = () => {
    this.setState(({ important }) => {
      return {
        important: !this.state.important
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>
        <button
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onExclamationClick}
        >
          <i className="fa fa-exclamation" aria-hidden="true" />
        </button>
        <button
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" aria-hidden="true" />
        </button>
      </span>
    );
  }
}
