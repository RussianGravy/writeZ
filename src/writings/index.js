// export const writings = [
//   {
//     "title":"Sample",
//     "category":"Reflection",
//     "date":"2025-06-01",
//     "excerpt":"A placeholder for new writing.",
//     "slug":"sample3"
//   },
// ];

const modules = import.meta.glob("./pieces/*.jsx", {
  eager: true,
});

console.log("modules", modules);

export const writings = Object.values(modules)
  .filter((module) => module.meta && module.Content)
  .map((module) => ({
    ...module.meta,
    Content: module.Content,
  }))
  .sort((a, b) => new Date(b.date) - new Date(a.date));