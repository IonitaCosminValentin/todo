import React from "react";

const FilterLink = ({ filter, visibilityFilter, children, changeFilter }) => {
  if (filter === visibilityFilter) {
    return <span>{children}</span>;
  }
  return (
    <>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          changeFilter(filter);
        }}
      >
        {children}
      </a>
    </>
  );
};

export default FilterLink;
