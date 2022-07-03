import React from "react";

const AddTodo = ({ submitTodo }) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let text = e.target[0].value;
          if (text.length >= 2) {
            submitTodo(text);
            e.target[0].value = "";
          }
        }}
      >
        <input type="text" placeholder="Add Todo" />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default AddTodo;
