import { configureStore } from "@reduxjs/toolkit";
import { todosApp } from "../features/todos/reducers";
export let store = configureStore({ reducer: { todosApp } });
