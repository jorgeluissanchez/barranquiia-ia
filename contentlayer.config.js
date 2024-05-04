import {
    defineDocumentType,
    makeSource
} from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import { resolve } from 'path'

/** @type {import('contentlayer/core').ContentLayerConfig } */
const computedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    slugAsParams: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    }
}
export const Doc = defineDocumentType(() => ({
    name: 'Doc',
    filePathPattern: `lessons/**/*.mdx`,
    bodyType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
    },
    computedFields,
}))
export default makeSource({
    contentDirPath: resolve('content'),
    documentTypes: [Doc],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,

                {
                    theme: 'github-dark',
                    onVisitLine: (node) => {
                        if (node.children.length === 0) {
                            node.children = [{ type: 'text', value: ' ' }]
                        }
                    },
                    onVisitHightLight: (node) => {
                        node.properties.className.push('line--highlighted')
                    },
                    onVisitHightLightWord: (node) => {
                        node.properties.className.push('word--highlighted')
                    },
                },

            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ['subheading-anchor'],
                        arialLabel: 'Link to section',
                    },
                },
            ]
        ],
    },
})
