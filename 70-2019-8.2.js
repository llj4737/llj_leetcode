/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。
 */

 /**
 * @param {number} n
 * @return {number}
 * 要爬上 n 层楼梯, 上一步必须爬 n-1 或 n-2 层楼梯, 所以 dp[n] = dp[n-1] + dp[n-2]
 */
var climbStairs = function(n) {
  if(n <= 2) return n;
  var arr = Array(n)
  arr[0] = 1;
  arr[1] = 2;
  for(var i = 2; i < n; i ++){
      arr[i] = arr[i-1] + arr[i-2];
  }
  return arr[n-1];
};
