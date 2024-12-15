import CodeDemo from "D:/documents/Langston_code/tzzl-site-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.60_markdown-it@14.1.0_sass-embedded@1.83.0_typescript@5.7_6j3m4wfhb2vzvkliw3r4oxl6su/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/documents/Langston_code/tzzl-site-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.60_markdown-it@14.1.0_sass-embedded@1.83.0_typescript@5.7_6j3m4wfhb2vzvkliw3r4oxl6su/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
