import comp from "D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/data/index.html.vue"
const data = JSON.parse("{\"path\":\"/data/\",\"title\":\"数据结构\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"数据结构\",\"createTime\":\"2024/12/15 12:06:35\",\"permalink\":\"/data/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"notes/数据结构/README.md\",\"bulletin\":false}")
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
