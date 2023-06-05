import React from "react";

function CategoryFilter({categories, setCatSelected }) {
 
  const handleCategorySelection = (e) => {
    e.target.className="selected"
    setCatSelected(e.target.innerText)
 }   
 
 return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
          <button key={category} onClick={handleCategorySelection}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
            