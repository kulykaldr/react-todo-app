import React from "react";

import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map(item => {
    const { id, important, done, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item todo-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          important={important}
          done={done}
        />
      </li>
    );
  });

  return <ul className="list-group">{elements}</ul>;
};

export default TodoList;
