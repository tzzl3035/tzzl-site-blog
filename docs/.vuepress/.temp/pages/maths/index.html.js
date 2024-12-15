import comp from "D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/maths/index.html.vue"
const data = JSON.parse("{\"path\":\"/maths/\",\"title\":\"数学\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"数学\",\"createTime\":\"2024/12/15 12:06:32\",\"permalink\":\"/maths/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":22},\"filePathRelative\":\"notes/数学/README.md\",\"bulletin\":false}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
