import './articleTagColors.css'
export const articleTagColors = {"最短路":"l0se","字符串":"yupj","双指针":"yupj","markdown":"cng0","剪贴板":"rjpg","ABC":"2xo8","递推":"2xo8"}

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
