---
title: Dijkstra
createTime: 2024/12/17 21:46:55
permalink: /article/ex39tzqc/
tags:
  - 最短路
---

### 简介

==Dijkstra== 是一种==单源最短路算法==，复杂度上限为 ==$O(n^2)$==。

### 基本思想

类似贪心，每次将==已知最短路的节点==的==所有出边==进行松弛，确定新节点的最短路。

### 例题

[【模板】单源最短路径](https://www.luogu.com.cn/problem/P4779)

### 大致模板

```cpp
struct Edg {
  int v, w;
};
std::map<int, std::vector<Edg>> mp;
int dis[100003] = {0};
bool vis[100003] = {0};
memset(dis, INF, sizeof(dis));
dis[1] = 0;
std::priority_queue<std::pair<int, int>, 
  std::vector<std::pair<int, int>>, 
  std::greater<std::pair<int, int>>> pq;
pq.push({0, 1});
while(!pq.empty()) {
  int pnt = pq.top().second;
  pq.pop();
  if(vis[pnt] == 1) continue;
  vis[pnt] = 1;
  for(auto j : mp[pnt]) {
    if(dis[j.v] > dis[pnt] + j.w) {
      dis[j.v] = dis[pnt] + j.w;
      pq.push({dis[j.v], j.v});
    }
  }
}
```
