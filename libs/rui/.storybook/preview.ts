import '../global-styles.scss';

export const parameters = {
  //docs: {
  // inlineStories: true, // No Iframe
  // page: DocumentationTemplate,
  // source: {
  // Sets how the story source snippet is auto-generated. auto | dynamic | code
  // type: 'dynamic', // Dynamically generated code snippet based on the output of the story function
  //excludeDecorators: true,
  //},
  //},
  theme: {
    selector: 'html',
    dataAttr: 'data-theme',
  },

  options: {
    storySort: (a, b) =>
      a.id === b.id
        ? 0
        : a.id.localeCompare(b.id, undefined, { numeric: true }),
  },
};
