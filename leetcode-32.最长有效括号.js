/**
 * 
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

示例 1:

输入: "(()"
输出: 2
解释: 最长有效括号子串为 "()"
示例 2:

输入: ")()())"
输出: 4
解释: 最长有效括号子串为 "()()"
 */

/**
 * @param {string} s
 * @return {number}
 * 初始化长度为 s.length 的数组, 初始值为 0
 * 如果 s[i] 和 s[i-1] 是有效的, dp[i] = dp[i-2] + 2;
 * 如果 s[i] == s[i-1] == ')', 说明可能前面有一个与 s[i] 对应的括号, 如果存在, i - dp[i-1] - 1 代表括号的位置
 * 如果 i - dp[i-1] >= 2, 代表前面可能存在有效的括号 ( dp[i - dp[i-1] - 2] )
 * 此时 dp[i] = dp[i-1] + (i - dp[i-1] >= 2 ? dp[i - dp[i-1] - 2] : 0) + 2
 * 
 */
var longestValidParentheses = function(s) {
    var max = 0;
    var dp = new Array(s.length).fill(0);
    for (var i = 1; i < s.length; i ++) {
        if (s[i] === ")") {
            if (s[i-1] === "(") {
                dp[i] = (i >= 2 ? dp[i-2] : 0) + 2;
            } else if (i - dp[i-1] > 0 && s[i - dp[i-1] - 1] === "(") {
                dp[i] = dp[i-1] + (i - dp[i-1] - 2 >= 0 ? dp[i-dp[i-1]-2] : 0) + 2;
            }
            max = Math.max(max, dp[i]);
        }
    }
    
    
    return max;
};
      