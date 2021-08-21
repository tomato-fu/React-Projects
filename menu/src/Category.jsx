import React from "react";

const Category = ({ name, filterItem }) => (
  <button type="button" className="filter-btn" onClick={() => filterItem(name)}>
    {name}
  </button>
);

export default Category;
