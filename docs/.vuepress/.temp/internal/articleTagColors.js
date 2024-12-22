import './articleTagColors.css'
export const articleTagColors = {"最短路":"qdjj","字符串":"1kyr","双指针":"1kyr","markdown":"9flm","剪贴板":"wnmb","ABC":"dh1z","递推":"dh1z"}

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
