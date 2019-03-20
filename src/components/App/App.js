import React, { Component } from "react";

import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import AddTodoItem from "../AddTodoItem/AddTodoItem";
import "./App.css";

export default class App extends Component {
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Make Awesome App", important: true, id: 2 },
      { label: "Have a lunch", important: false, id: 3 }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const newData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newData
      };
    });
  };

  addItem = text => {
    this.setState(({ todoData }) => {
      const newItem = {
        label: text,
        important: false,
        id: todoData.length + 1
      };

      const newData = [...todoData, newItem];

      return {
        todoData: newData
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={3} done={1} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
        <AddTodoItem onAddedItem={this.addItem} />
      </div>
    );
  }
}
