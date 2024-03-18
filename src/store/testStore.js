import { createStore } from "../zustand-core";

export const store = createStore(createState);

function createState(setState, getState, api) {
  console.log("调用 createState");
  console.log(" - getState()", getState());
  return {
    count: 0,
    add: () => setState((state) => ({ count: state.count + 1 })),
  };
}
