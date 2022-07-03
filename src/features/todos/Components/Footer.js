import React from "react";
import FilterLink from "./FilterLink";

const Footer = ({ changeFilter, visibilityFilter }) => {
  return (
    <>
      <p>
        Show:{" "}
        <FilterLink
          filter="SHOW_ALL"
          visibilityFilter={visibilityFilter}
          changeFilter={changeFilter}
        >
          All
        </FilterLink>{" "}
        <FilterLink
          filter="SHOW_ACTIVE"
          visibilityFilter={visibilityFilter}
          changeFilter={changeFilter}
        >
          Active
        </FilterLink>{" "}
        <FilterLink
          filter="SHOW_COMPLETED"
          visibilityFilter={visibilityFilter}
          changeFilter={changeFilter}
        >
          Completed
        </FilterLink>
      </p>
    </>
  );
};

export default Footer;
