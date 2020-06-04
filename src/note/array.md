<!--
 * @Author: Wenzhe
 * @Date: 2020-06-03 15:02:23
 * @LastEditors: Wenzhe
 * @LastEditTime: 2020-06-03 15:36:00
-->

# Array 数组

是由相同类型的元素的集合所组成的数据结构，分配一块连续的内存来储存。利用元素的索引引可以计算出该元素对应的储存地址。

## 算法复杂度

* 随机访问： 平均为O(1)
* 插入与删除：平均为O(n)

## api

### 1. 创建与初始化数组

* 使用字面量

  ```js
    const arr = [1, 2, 3]
  ```

* 使用构造函数

  ```js
    const arr1 = Array(3) // [empty × 3]
    const arr2 = Array('3') // ["3"]
  ```

* 使用 Array.of() 方法

  ```js
  const arr = Array.of(3) // [3]
  ```

* 使用 Array.from() 方法

  ```js
  const arr = Array.from({length: 3}) // [undefined, undefined, undefined]
  ```

### 2.