const modules = [
];

export const writings = modules
  .map(({ slug, module }) => ({ slug, ...module.meta, Content: module.Content }))
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const featured = writings.slice(0, 3);
