import './articleTagColors.css'
export const articleTagColors = {"最短路":"pqai","数论":"mozk","栈":"4i1j","并查集":"p0uo","树状数组":"offy","字符串":"bke5","双指针":"bke5","离散化":"mozk","markdown":"uawu","剪贴板":"0dv9","ABC":"oqz8","递推":"oqz8"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateArticleTagColors) {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ articleTagColors }) => {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  })
}
