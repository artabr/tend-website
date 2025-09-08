export const getBuilderTemplate = (slug: string) => {
  switch (slug) {
    case '/home':
      return 'home';
    default:
      return undefined;
  }
};
