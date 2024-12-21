---
title: ABC385C
createTime: 2024/12/21 21:21:35
permalink: /article/ckyod62v/
tags: 
  - ABC
  - 递推
---

### 思路

递推，依次枚举间隔即可...

### 我的代码

```cpp{9-17}
// 输入
int N;
std::cin >> N;
std::vector<int> H(N+3), dp(N+3);
for(int i = 1; i <= N; ++i) 
  std::cin >> H[i];
// 递推过程
int ans = 1;
for(int i = 1; i < N; ++i) {
  for(int j = 1; j <= N; ++j)
    dp[j] = 1;
  for(int j = 1+i; j <= N; ++j) {
    if(H[j-i] == H[j]) 
      dp[j] += dp[j-i];
    ans = std::max(ans, dp[j]);
  }
}
std::cout << ans;
```
