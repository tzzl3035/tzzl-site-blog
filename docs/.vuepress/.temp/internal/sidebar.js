export const sidebar = {"/":{"/dp":{"items":"auto","prefix":"/notes/动态规划/"},"/graph":{"items":"auto","prefix":"/notes/图论/"},"/maths":{"items":"auto","prefix":"/notes/数学/"},"/data":{"items":"auto","prefix":"/notes/数据结构/"},"/others":{"items":"auto","prefix":"/notes/杂项/"}},"__auto__":{"/notes/动态规划/":[],"/notes/图论/":[{"text":"Dijkstra","link":"/graph/ex39tzqc/","items":[]},{"text":"Floyd","link":"/graph/fc72ifbr/","items":[]}],"/notes/数学/":[],"/notes/数据结构/":[],"/notes/杂项/":[{"text":"字典树","link":"/others/qmyu3xvm/","items":[]},{"text":"滑动窗口","link":"/others/o9uyfhib/","items":[]}]},"__home__":{"/notes/动态规划/":"/dp/","/notes/图论/":"/graph/","/notes/数学/":"/maths/","/notes/数据结构/":"/data/","/notes/杂项/":"/others/"}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
