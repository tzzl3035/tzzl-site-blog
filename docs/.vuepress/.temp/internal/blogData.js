export const blogPostData = [{"path":"/article/2usip6o0/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["markdown"],"createTime":"2024/12/15 11:30:10","lang":"zh-CN","excerpt":""}]

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
