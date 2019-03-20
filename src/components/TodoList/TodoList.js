import React from "react";

import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item todo-group-item">
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return <ul className="list-group">{elements}</ul>;
};

export default TodoList;
