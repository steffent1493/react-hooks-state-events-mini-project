import React from "react";

function CategoryFilter({categoryState, filterCategory, categories}) {

  function handleClick(event) {
    filterCategory(event.target.value)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => { return <button className={(categoryState === category) ? "selected" : ""} onClick={handleClick} key={category} value={category}>{category}</button>})}
    </div>
  );
}

export default CategoryFilter;
