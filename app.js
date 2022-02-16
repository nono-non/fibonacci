'use strict';
const memo = new Map(); //初期化
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;

}
/*console.log(`${process.argv[2]}番目のフィボナッチ数は${fib(process.argv[2])}です`);*/
const length = 100;
for (let i = 1; i <= length; i++) {
  console.log(`${i}番目のフィボナッチ数は${fib(i)}です`);
}
