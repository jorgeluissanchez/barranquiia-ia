// contentlayer.config.js
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { resolve } from "path";
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `complete-nextjs/**/*.mdx`,
  bodyType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    }
  },
  computerFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: resolve("src/content"),
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine: (node) => {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHightLight: (node) => {
            node.properties.className.push("line--highlighted");
          },
          onVisitHightLightWord: (node) => {
            node.properties.className.push("word--highlighted");
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            arialLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-VMJP3TBR.mjs.map
