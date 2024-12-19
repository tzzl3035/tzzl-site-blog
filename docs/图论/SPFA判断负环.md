---
title: SPFA判断负环
createTime: 2024/12/19 22:37:32
permalink: /article/dozm0bel/
tags: 
  - 最短路
---

这个有点不一样，先给例题:\
[【模板】负环](https://www.luogu.com.cn/problem/P3385)

### 如何实现用 SPFA 判断能从初始点到达的负环??

在无负环时，简单模拟即可发现，一个节点最多入队 $n-1$ 次，所以若一个节点入队更多次，即可推出图中有负环。

::: note 没懂看这里
如果有负环，只要不断在负环里兜圈子，就可以无限刷低答案，所以可以这样判断负环。
:::

::: tip SPFA
个人理解: 其实就是将 Bellman–Ford 变为类似记忆化BFS(确信)的形式，从而优化时间复杂度。
:::

### 大致模板
```cpp{4-22}
int n, m;
std::vector<std::set<std::pair<int, int>>> mp(n+3);
std::vector<int> dis(n+3, 1e9), vis(n+3, 0);
// 以下是 SPFA
std::queue<int> que;
dis[1] = 0; que.push(1);
bool flag = 0;
for(; !que.empty(); ) {
  int tmp = que.front();
  que.pop();
  vis[tmp] += 1;
  if(vis[tmp] == n) { // 判断入队次数
    flag = 1;
    break;
  }
  for(auto i: mp[tmp]) {
    if(dis[i.first] > dis[tmp] + i.second) {
      dis[i.first] = dis[tmp] + i.second;
      que.push(i.first);
    }
  }
}
```
