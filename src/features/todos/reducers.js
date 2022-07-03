const todosApp = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return addTodo(state, action);
    case "TOGGLE_TODO":
      return toggleTodo(state, action.id);
    default:
      return state;
  }
};

const visibilityFilter = (state = "ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const addTodo = (state, action) => {
  return [...state, { id: action.id, text: action.text, completed: false }];
};

const toggleTodo = (state, id) => {
  return state.map((todo) => {
    if (todo.id !== id) return todo;

    return { ...todo, completed: !todo.completed };
  });
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((todo) => todo.completed);
    case "SHOW_ACTIVE":
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};

export { todosApp, getVisibleTodos };
