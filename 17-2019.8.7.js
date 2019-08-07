/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */
/**
 * 
 * @param {*} digits 
 * 用分治做的
 * 将数组分成一个个小的数组然后合并
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  var map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  var arr = [];
  for (var i = 0; i < digits.length; i++) {
    arr.push(map[digits[i]].split(''));
  }
  return divide(arr);

};

function divide(arr) {
  if (arr.length <= 1) return arr[0];
  var privot = Math.floor(arr.length / 2);
  var left = arr.slice(0, privot),
    right = arr.slice(privot);
  return merge(divide(left), divide(right));
}

function merge(left, right) {
  var arr = [];
  for (var i = 0; i < left.length; i++) { // left: ['a','b', 'c'], right: ['d','e','f']
    for (var j = 0; j < right.length; j++) {
      arr.push(left[i] + right[j]);
    }
  }
  return arr;    //['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
}