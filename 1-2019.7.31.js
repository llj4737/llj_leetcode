/**
 * 两数之和给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * 将 nums[i] 和 index 以键值对的形式存入 map 中
 * 每次遍历数组的时候判断 map[(target - nums[i])] 是否存在
 * 若存在返回 [map[target-nums[i]], i]
 * 时间复杂度 O(n), 空间复杂度 O(n)
 */
var twoSum = function(nums, target) {
  let hash = {};
  for(var i = 0, l = nums.length; i < l; i ++){
      var num =target - nums[i];
      var find = hash[num];
      if(find !== undefined){
          return [find, i];
      }
      hash[nums[i]] = i;
  }
};