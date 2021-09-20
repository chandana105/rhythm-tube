export const generateThumbnail = (videoId, title) => {
  if (
    title ===
      "Ziddi Dil Full Video | MARY KOM | Feat Priyanka Chopra | Vishal Dadlani | HD" ||
    title ===
      "Romantic Hits Of Kishore Kumar | Kishore Kumar Best Songs Ever" ||
    title ===
      "Koi Kahe Kehta Rahe Full Song | Dil Chahta Hai | Aamir Khan, Akshaye Khanna, Saif Ali Khan"
  ) {
    return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  } else {
    return `https://i.ytimg.com/vi/${videoId}/hq720.jpg`;
  }
};

export const trimStr = (str) => {
  const len = 70;
  return str.length > len ? str.substring(0, len) + "..." : str;
};
