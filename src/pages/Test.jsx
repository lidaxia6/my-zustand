import { useEffect, useState } from "react";

import { store } from "../store/testStore";
export default function Test() {
  const [temp, setTemp] = useState(0);
  useEffect(() => {
    console.log("store ==>", store);
    const unsubscribe = store.subscribe(() => {
      console.log(" ----------listeners-------⬇️");
      console.log("listern1()...");
      console.log("listern2()...");
      console.log("store.getState()", store.getState());
      let count = store.getState().count;
      setTemp(count);
      console.log(" ----------listeners-------⬆️");
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => store.setState((state) => ({ count: state.count + 1 }))}
      >
        {temp}
      </button>

      <button onClick={() => console.log(store.getState())}>getState()</button>
      <button onClick={() => console.log(store.getState().count)}>
        store.getState().count
      </button>
      <button onClick={() => store.getState().add()}>
        store.getState().add()
      </button>
    </div>
  );
}
