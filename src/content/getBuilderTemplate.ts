export const getBuilderTemplate = (slug: string, locale: string) => {
  switch (slug) {
    case 'home':
      return `${locale}/home`;
    default:
      return undefined;
  }
};
