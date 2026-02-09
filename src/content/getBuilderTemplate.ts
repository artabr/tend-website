export const getBuilderTemplate = (slug: string, locale: string) => {
  switch (slug) {
    case 'index':
      return `${locale}/home`;
    default:
      return undefined;
  }
};
