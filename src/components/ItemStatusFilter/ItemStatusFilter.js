import React, { Component } from "react";

import "./ItemStatusFilter.css";

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" }
  ];

  render() {
    const { onClickFilter, filter } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const cls = filter === name ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          className={`btn ${cls}`}
          onClick={() => onClickFilter(name)}
          key={name}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
