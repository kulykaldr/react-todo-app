import React from "react";

import "./SearchPanel.css";

const SearchPanel = () => {
  return (
    <input
      type="text"
      className="form-control search-input"
      name="search"
      placeholder="search"
    />
  );
};

export default SearchPanel;
