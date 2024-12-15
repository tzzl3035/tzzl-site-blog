
import { useCopyCode } from 'D:/documents/Langston_code/tzzl-site-blog/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.120_typescript@5.7.2_vue@3.5.13_typescript@5.7.2__vue_txl7osfkfyg62o2d6hlq4ndfdy/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from 'D:/documents/Langston_code/tzzl-site-blog/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.120_typescript@5.7.2_vue@3.5.13_typescript@5.7.2__vue_txl7osfkfyg62o2d6hlq4ndfdy/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

export default {
  
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
    useCollapsedLines()
  },
}
