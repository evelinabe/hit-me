import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../App";

interface ClickCounterState {
  value: number;
}

const initialState: ClickCounterState = {
  value: 0,
};

export const clickCounter = createSlice({
  name: "clickCounter",
  initialState,
  reducers: {
    resetCount: (state) => {
      return initialState
    },
    addToCount: (state) => {
      state.value++;
    },
    
  },
});

export const selectClickCounter = (state: RootState) =>
  state.clickCounter.value;

export default clickCounter.reducer;
