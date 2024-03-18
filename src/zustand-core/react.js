// react 绑定库

import { useSyncExternalStore } from "react";
import { createStore } from "./vanilla";

export function create(createState) {
  const api =
    typeof createState === "function" ? createStore(createState) : createState;

  const useBoundStore = (selector) => useStore(api, selector);
  return useBoundStore;
}

function useStore(api, selector) {
  console.log("selector ==>", selector);
  const slice = useSyncExternalStore(api.subscribe, api.getState);
  console.log("slice ==>", slice);
  return selector ? selector(slice) : slice;
}
