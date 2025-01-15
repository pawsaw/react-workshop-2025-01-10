import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "../domain/counter/store/counterSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  books: (state = []) => state,
});

export type State = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
