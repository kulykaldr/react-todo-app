import React, { Component } from "react";

import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import AddTodoItem from "../AddTodoItem/AddTodoItem";
import "./App.css";
import { array } from "prop-types";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { label: "Drink Coffee", done: false, important: false, id: 1 },
      { label: "Make Awesome App", done: false, important: false, id: 2 },
      { label: "Have a lunch", done: false, important: false, id: 3 }
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
    const newItem = {
      label: text,
      done: false,
      important: false,
      id: this.maxId++
    };

    this.setState(({ todoData }) => {
      const newData = [...todoData, newItem];

      return {
        todoData: newData
      };
    });
  };

  toggleProp = (arr, id, prop) => {
    return arr.map(el => {
      if (el.id === id) {
        el[prop] = !el[prop];
      }
      return el;
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => this.toggleProp(todoData, id, "important"));
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => this.toggleProp(todoData, id, "done"));
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddTodoItem onAddedItem={this.addItem} />
      </div>
    );
  }
}
