import React, { Component } from "react";

import "./AddTodoItem.css";

export default class AddTodoItem extends Component {
  state = {
    text: ""
  };

  onChangeInput = event => {
    const { value } = event.target;

    this.setState(({ text }) => {
      return {
        text: value
      };
    });
  };

  render() {
    const { onAddedItem } = this.props;
    const { text } = this.state;

    return (
      <div className="top-panel d-flex">
        <input
          type="text"
          className="form-control add-item-input"
          name="add-item"
          placeholder="Add new item"
          onChange={this.onChangeInput}
        />
        <button className="btn btn-info" onClick={() => onAddedItem(text)}>
          Add
        </button>
      </div>
    );
  }
}
