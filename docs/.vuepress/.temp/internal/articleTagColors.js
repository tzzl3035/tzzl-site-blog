import './articleTagColors.css'
export const articleTagColors = {"数论":"liv3","最短路":"1hp8","并查集":"uzkx","生成树":"5nru","栈":"09ze","树状数组":"o79g","倍增":"9gqa","字符串":"dwuh","双指针":"dwuh","离散化":"liv3","markdown":"jscm","剪贴板":"pe3g","ABC":"oy6o","递推":"oy6o"}

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
