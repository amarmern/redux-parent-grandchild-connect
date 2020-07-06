import React from 'react';

import './App.css';
import {Provider}  from 'react-redux';
import { createStore } from "redux";
import Parent from "./Parent";

//Initial State create
const initialState = {
  count: 0
};

//create reducer
function reducer(state=initialState, action){
  switch (action.type) {
    case "INCREMENT":
      return {count : state.count +1}
    default:
    return {
    count:state.count
  }
  }
}

//Create store
const store = createStore(reducer)
console.log(store.getState())

function App() {
  return (
    <div className="App">
    my App
    <Provider store={store}>
    <Parent />
     </Provider>
    </div>
  );
}

export default App;
