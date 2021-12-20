import React from "react";

const Categories = ({ filterItems, category }) => {
  return (
    <div className="btn-container">
      {category.map((cate, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            type="button"
            onClick={() => filterItems(cate)}
          >
            {cate}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
