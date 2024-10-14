let count = 0;
let listeners = [];
export const testStore = {
  // 模拟订阅函数，注意listener 是必须要加的。
  subscribe(listener) {
    console.log('subscribe 执行');
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
      console.log('unsubscribe 执行');
    };
  },

  // 模拟getState
  getSnapshot() {
    console.log('getState 执行');
    return count;
  },

  add() {
    count = count + 1;
    listeners.forEach((listener) => listener());
  },
};
