'use strict';
function fib(n){
  if(n===0){
    return 0;
  }else if(n===1){
    return 1;
  }
  return fib(n-1)+fib(n-2);
  
}
/*console.log(`${process.argv[2]}番目のフィボナッチ数は${fib(process.argv[2])}です`);*/
const length = 40;
for(let i = 1; i <= length; i++){
  console.log(`${i}番目のフィボナッチ数は${fib(i)}です`);
}
