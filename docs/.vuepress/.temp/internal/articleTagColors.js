import './articleTagColors.css'
export const articleTagColors = {"最短路":"ptz3","并查集":"3v1g","生成树":"xoqq","数论":"pzva","栈":"u38d","树状数组":"tm7c","倍增":"amsg","字符串":"l4y6","双指针":"l4y6","离散化":"pzva","markdown":"0hm9","剪贴板":"11p7","ABC":"byru","递推":"byru"}

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
