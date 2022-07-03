import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onClickTodo }) => {
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onClick={() => {
                onClickTodo(todo.id);
              }}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
