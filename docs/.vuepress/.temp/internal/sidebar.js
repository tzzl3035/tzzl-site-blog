export const sidebar = {"/":{"/dp":{"items":[""],"prefix":"/notes/动态规划/"},"/graph":{"items":[""],"prefix":"/notes/图论/"},"/maths":{"items":[""],"prefix":"/notes/数学/"},"/data":{"items":[""],"prefix":"/notes/数据结构/"},"/others":{"items":[""],"prefix":"/notes/杂项/"}},"__auto__":{},"__home__":{}}

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
