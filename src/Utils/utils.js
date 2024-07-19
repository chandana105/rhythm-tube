import axios from "axios";

export const generateThumbnail = (videoId, title) => {
  if (
    title ===
      "Ziddi Dil Full Video | MARY KOM | Feat Priyanka Chopra | Vishal Dadlani | HD" ||
    title ===
      "Romantic Hits Of Kishore Kumar | Kishore Kumar Best Songs Ever" ||
    title ===
      "Koi Kahe Kehta Rahe Full Song | Dil Chahta Hai | Aamir Khan, Akshaye Khanna, Saif Ali Khan" ||
    title ===
      "HUMRAAZ (1967) na moonh chhupa ke jiyo aur na sar jhuka ke jiyo Mahendra Ravi Sahir"
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

export const itemInWatchlater = (watchlater, video) => {
  return watchlater.some((items) => items._id === video._id);
};

export const itemInLikedVideos = (likedVideos, video) => {
  return likedVideos.some((items) => items._id === video._id);
};

export function setupAuthHeaderForServiceCalls(token) {
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`);
  }
  delete axios.defaults.headers.common["Authorization"];
}
