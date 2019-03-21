import React, { Component } from "react";

import "./AddTodoItem.css";

export default class AddTodoItem extends Component {
  state = {
    telabel: ""
  };

  onChangeInput = event => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onAddedItem(this.state.label);
    this.setState({
      label: ""
    });
  };

  render() {
    return (
      <form className="top-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control add-item-input"
          name="add-item"
          placeholder="Add new item"
          value={this.state.label}
          onChange={this.onChangeInput}
        />
        <button className="btn btn-info">Add</button>
      </form>
    );
  }
}
