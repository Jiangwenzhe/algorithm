/*
 * @Author: Wenzhe
 * @Date: 2020-06-03 18:03:32
 * @LastEditors: Wenzhe
 * @LastEditTime: 2020-06-03 18:07:43
 */

var moveZeroes = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
  }
  for (let p = i; p < nums.length; p++) {
    nums[p] = 0;
  }
  return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
