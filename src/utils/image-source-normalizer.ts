export const sourceNormalizer = (imgSrc: string) => {
  if (!imgSrc) return "";
  return imgSrc.includes("https")
    ? imgSrc
    : imgSrc.includes("image-not-found.webp")
      ? imgSrc
      : `https://${imgSrc}`;
};
