import React from "react";
import { Provider, useDispatch } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { clickCounter } from "./reducers/clickCounter";
import { ClickView } from './views/clickView'
import { CountView } from './views/countView'

const reducer = combineReducers({ clickCounter: clickCounter.reducer });

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


const App:React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ClickView}/>
          <Route exact path="/count" component={CountView}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
