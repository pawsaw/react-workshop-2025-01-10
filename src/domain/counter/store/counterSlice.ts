import { createSlice } from "@reduxjs/toolkit";
import { rootReducer } from "../../../store";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return { ...state, count: state.count + 1 };
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

// Action creators generated via `createSlice`
export const { increment, decrement } = countSlice.actions;

// Selector
export const counterSelector = (state: ReturnType<typeof rootReducer>) =>
  state.counter;

// Reducer
export const counterReducer = countSlice.reducer;
