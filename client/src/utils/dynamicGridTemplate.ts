// Dynamically generate grid-template-areas
export const getGridTemplate = (photoCount: number) => {
  if (photoCount === 1) return `"photo1 photo1 photo1 photo1"`;
  if (photoCount === 2) return `"photo1 photo1 photo2 photo2"`;
  if (photoCount === 3)
    return `"photo1 photo1 photo2 photo3"
              "photo1 photo1 photo2 photo3"`;
  if (photoCount === 4)
    return `"photo1 photo1 photo2 photo3"
              "photo1 photo1 photo4 photo4"`;
  if (photoCount >= 5)
    return `"photo1 photo1 photo2 photo3"
              "photo1 photo1 photo4 photo5"`;
  return "";
};
