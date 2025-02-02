---
title: KMP
createTime: 2025/02/02 19:21:53
permalink: /article/eojgz9yn/
tags:
  - 字符串
  - KMP
---

### 作用

更加快速地在字符串中匹配模式串。

### 例题

[【模板】KMP](https://www.luogu.com.cn/problem/P3375)

### 大致思想及代码
找到模式串每一个前缀中的==最长但不完全重合的相同前后缀==，记在 $f_i$ 中达到优化目的。$f_i$ 可以理解为若模式串第 $i+1$ 位不匹配，应从哪一位继续进行匹配。
```cpp{6-9,13-20}
std::string s1, s2;
std::vector<int> f(s2.size());
f[0] = 0;
int ind = 0;
for(int i = 1; i < s2.size(); ++i) { // 匹配模式串
  for(; ind && s2[ind] != s2[i]; ind = f[ind-1]) ; // 若不匹配，往前找
  if(s2[ind] == s2[i]) 
    ++ ind; // 若匹配，增加指针
  f[i] = ind;
}
ind = 0;
for(int i = 0; i < s1.size(); ++i) { // 匹配字符串同理
  for(; ind && s2[ind] != s1[i]; ind = f[ind-1]) ;
  if(s2[ind] == s1[i]) {
    ++ind;
    if(ind == s2.size()) {
      // i - ind + 2; // 最终位置
      ind = f[ind-1];
    }
  }
}
```
