/*
 * @Author: Wenzhe
 * @Date: 2020-06-03 16:06:02
 * @LastEditors: Wenzhe
 * @LastEditTime: 2020-06-03 16:26:31
 */

 /**
  * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，
  * 垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
  *
  * input: [1,8,6,2,5,4,8,3,7]
  * output: 49
  */

// 暴力解法
//  var maxArea = function(height) {
//   // 计算面积 area = (right-left) * min(height[left], height[right])
//   let max_area = 0;
//   // const height_length = height.length;
//   for (let i = 0; i < height.length; i++) {
//     for (let j = height.length - 1; j > i; j--) {
//       let calculated_area = (j - i) * (Math.min(height[j], height[i]));
//       max_area = Math.max(max_area, calculated_area);
//     }
//   }
//   return max_area;
// };


var maxArea = function(height) {
  let max_area = 0;
  let l = 0;
  let r = height.length - 1;
  while(l < r) {
    let area = (r - l) * (Math.min(height[r], height[l]));
    max_area = Math.max(max_area, area);
    height[l] >= height[r] ? r-- : l++;
  }
  return max_area;
};

console.log('11 --- ', maxArea([1,8,6,2,5,4,8,3,7]));
console.log('11 --- ', maxArea([1, 1]));


export default maxArea;