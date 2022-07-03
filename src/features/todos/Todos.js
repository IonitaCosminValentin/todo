import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVisibleTodos } from "./reducers";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
import Footer from "./Components/Footer";

const Todos = () => {
  let store = useSelector((store) => store.todosApp);
  let todos = getVisibleTodos(store.todos, store.visibilityFilter);

  const dispatch = useDispatch();

  return (
    <div>
      <AddTodo
        submitTodo={(text) => {
          dispatch({ type: "ADD_TODO", text, id: Math.random() * 10 });
        }}
      />

      <TodoList
        todos={todos}
        onClickTodo={(id) => {
          dispatch({ type: "TOGGLE_TODO", id });
        }}
      />

      <Footer
        visibilityFilter={store.visibilityFilter}
        changeFilter={(filter) => {
          dispatch({ type: "SET_VISIBILITY_FILTER", filter });
        }}
      />
    </div>
  );
};

export default Todos;
