import { useSyncExternalStore } from 'react';
import { testStore } from './testStore';

export default function useSyncExternalStorePage() {
  const count = useSyncExternalStore(
    testStore.subscribe,
    testStore.getSnapshot
  );

  return (
    <div>
      {count}
      <button onClick={testStore.add}>+1</button>
    </div>
  );
}
