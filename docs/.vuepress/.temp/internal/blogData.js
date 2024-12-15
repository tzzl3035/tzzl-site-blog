export const blogPostData = [{"path":"/article/eqmcpm7m/","title":"介绍","categoryList":[{"id":"28726c","sort":10000,"name":"杂项"}],"sticky":true,"createTime":"2024/12/15 12:57:44","lang":"zh-CN","excerpt":""},{"path":"/article/2usip6o0/","title":"Markdown","categoryList":[{"id":"28726c","sort":10000,"name":"杂项"}],"tags":["markdown"],"createTime":"2024/12/15 11:30:10","lang":"zh-CN","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
