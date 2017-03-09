'use strict';
/**
 * 获取数组里面的最大值
 * @param  {array} arr      传入数组
 * @param  {function} iteratee 最大值定义函数
 * @return {value}          数组中最大的值
 *
 * 如：
 * const users = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
 * max(users, user => user.age);
 * => {name: 'curly', age: 60};
 */
export function max (arr, iteratee) {
  if (!arr || !arr.length) return null;
  let temp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (iteratee(arr[i]) > iteratee(temp)) {
      temp = arr[i];
    }
  }
  return temp;
}
