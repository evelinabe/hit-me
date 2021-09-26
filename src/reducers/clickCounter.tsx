import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    addToCount: (store, action: PayloadAction<number>) => {
      store.value += 1;
    },
  },
});

export const selectClickCounter = (store: RootState) =>
  store.clickCounter.value;

export default clickCounter.reducer;
