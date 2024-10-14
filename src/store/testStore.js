import { createStore } from '../zustand-core';

// 纯函数，由createStore 调用
function createState(setState, getState, api) {
  console.log('调用 createState');
  console.log(' - getState()', getState());
  return {
    count: 0,
    add: () => setState((state) => ({ count: state.count + 1 })),
  };
}

export const store = createStore(createState);
