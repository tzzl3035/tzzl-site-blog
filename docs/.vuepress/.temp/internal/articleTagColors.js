import './articleTagColors.css'
export const articleTagColors = {"最短路":"0lgj","栈":"hbqg","并查集":"gohk","字符串":"ypfk","双指针":"ypfk","离散化":"bxuw","markdown":"44bk","剪贴板":"5bg3","ABC":"h0al","递推":"h0al"}

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
