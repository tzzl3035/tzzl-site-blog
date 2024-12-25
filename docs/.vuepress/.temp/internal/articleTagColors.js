import './articleTagColors.css'
export const articleTagColors = {"最短路":"oabr","并查集":"roua","生成树":"cq06","数论":"p72t","栈":"kam4","树状数组":"5kj4","字符串":"xgda","双指针":"xgda","离散化":"p72t","markdown":"ykkh","剪贴板":"6b1x","ABC":"aej3","递推":"aej3"}

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
