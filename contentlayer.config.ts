import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const HomeContent = defineDocumentType(() => ({
  name: 'HomeContent',
  filePathPattern: '**/*.md',
  contentType: 'markdown',
  fields: {
    slug: { type: 'string', required: true },
    locale: { type: 'string', required: true },
    home: { type: 'json', required: true },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [HomeContent],
});
