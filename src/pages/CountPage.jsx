import useCountStore from "../store/useCountStore";

export default function CountPage() {
  const countStore = useCountStore();
  console.log(
    "%c [ countStore ]",
    "font-size:13px; background:pink; color:#bf2c9f;",
    countStore
  );
  const { bears, increase, decrease, reset, count, increaseCount } = countStore;
  return (
    <div>
      <h3>CountStore</h3>

      <button onClick={() => increase()}>increase {bears}</button>
      <button onClick={() => decrease()}>decrease {bears}</button>
      <button onClick={() => reset()}>reset</button>

      <button onClick={() => increaseCount()}>count {count}</button>

      {/* <Child /> */}
    </div>
  );
}

// function Child() {
//   const bears = useBearStore((state: any) => state.bears);
//   return (
//     <div>
//       <h3>Child</h3>
//       <p>{bears}</p>
//     </div>
//   );
// }
