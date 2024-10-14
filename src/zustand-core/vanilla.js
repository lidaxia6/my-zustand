// js 状态管理库

export function createStore(fn) {
  console.log("✅调用 createStore");
  let state;
  let listeners = new Set();

  const getState = () => {
    console.log("✅调用 getState");
    return state;
  };

  const setState = (partial, replace) => {
    console.log("✅调用 setState");
    const nextState = typeof partial === "function" ? partial(state) : partial;

    if (!Object.is(nextState, state)) {
      const prevState = state;
      // 如果replace不为null或undefine -> state = repalce
      state =
        replace ?? typeof nextState !== "object"
          ? nextState
          : Object.assign({}, state, nextState);
      listeners.forEach((listener) => {
        console.log("执行 取出listeners数组并执行", listeners);
        listener(state, prevState);
      });
    }
  };

  const subscribe = (listener) => {
    console.log("✅调用 subscribe");
    console.log(" - listener ==>", listener);

    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const destroy = () => {
    listeners.clear();
  };

  const api = {
    getState,
    setState,
    subscribe,
    destroy,
  };

  // 将 setState,getState,api 传递给createState(),由用户自己使用这些方法来加工处理state
  console.log("准备调用 fn");
  state = fn(setState, getState, api);
  console.log("第一次 state 是什么？", state);
  return api;
}
