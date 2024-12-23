import './articleTagColors.css'
export const articleTagColors = {"最短路":"8j8f","数论":"bxou","栈":"v3sf","并查集":"nt57","字符串":"4a6p","双指针":"4a6p","离散化":"bxou","markdown":"jlip","剪贴板":"178y","ABC":"e8nk","递推":"e8nk"}

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
