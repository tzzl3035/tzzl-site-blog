---
title: Floyd
createTime: 2024/12/18 23:08:41
permalink: /graph/fc72ifbr/
tags: 
  - 最短路
---

### 简介

==Floyd== 是一个 ==$O(n^3)$== 的==全源最短路算法==。

### 基本思想

类似动态规划，每次选择一个==中转点==，再遍历所有节点，以此进行松弛，从而算出全源最短路。

### 例题

[【模板】Floyd](https://www.luogu.com.cn/problem/B3647)

### 模板代码
```cpp{3-9}
int n, m, dis[103][103];
// 需要初始化 dis
for(int k = 1; k <= n; ++k) {
  for(int i = 1; i <= n; ++i) {
    for(int j = 1; j <= n; ++j) {
      dis[i][j] = std::min(dis[i][j], dis[i][k] + dis[j][k]);
    }
  }
}
```
