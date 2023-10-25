import React, { useState } from "react";

function CategoryFilter({ categories, handleCategoryClick, clickedCategory, stateCategories}) {
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {stateCategories.map((category) => <button key={category} className={clickedCategory === category ? "selected" : ""} onClick={() => handleCategoryClick(category)} >{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
