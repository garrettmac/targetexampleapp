import { bindActionCreators, createStore } from "redux";

const preloadedState = {
  reduxCount: 0
};
/* --- REDUCERS --- */

const countReducer = (state = 0, action) => {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// const reducer = { countReducer };
/* --- ACTIONS --- */

const incrementAction = (count) => ({
    type: "INCREMENT",
    payload: count
});


const actions = {incrementAction};
/* --- STORE --- */

// const ReduxApp =

const store = createStore(countReducer, 0);


export { actions, store, countReducer };