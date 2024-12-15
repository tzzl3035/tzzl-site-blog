import comp from "D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/others/index.html.vue"
const data = JSON.parse("{\"path\":\"/others/\",\"title\":\"杂项\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"杂项\",\"createTime\":\"2024/12/15 12:06:15\",\"permalink\":\"/others/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":10},\"filePathRelative\":\"notes/杂项/README.md\",\"bulletin\":false}")
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
