import React from "react";
import { Provider, useDispatch } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { clickCounter } from "./reducers/clickCounter";

const reducer = combineReducers({ clickCounter: clickCounter.reducer });

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/clicks" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
