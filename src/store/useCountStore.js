// import { create } from "zustand";
import { create } from "../zustand-core";

const useCountStore = create((setState) => ({
  bears: 0,
  count: 100,
  increase: (by = 1) => setState((state) => ({ bears: state.bears + by })),
  decrease: (by = 1) => setState((state) => ({ bears: state.bears - by })),
  reset: () => setState({ bears: 0 }),

  increaseCount: () => setState((state) => ({ count: state.count + 1 })),
}));

export default useCountStore;
