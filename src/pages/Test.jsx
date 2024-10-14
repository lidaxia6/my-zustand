import { useEffect, useState } from 'react';

import { store } from '../store/testStore';
export default function Test() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('store ==>', store);
    const unsubscribe = store.subscribe(() => {
      console.log(' ----------listeners-------⬇️');
      console.log('listern1()...');
      console.log('listern2()...');
      console.log('store.getState()', store.getState());
      let count = store.getState().count;
      setCount(count);
      console.log(' ----------listeners-------⬆️');
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h2>replace 方式，直接替换</h2>
      {count}
      <button
        onClick={() => store.setState((state) => ({ count: state.count + 1 }))}
      >
        +1
      </button>
      <hr />

      <button onClick={() => console.log(store.getState())}>getState()</button>
      <hr />
      <button onClick={() => console.log(store.getState().count)}>
        store.getState().count
      </button>
      <hr />
      <button onClick={() => store.getState().add()}>
        store.getState().add()
      </button>
    </div>
  );
}
