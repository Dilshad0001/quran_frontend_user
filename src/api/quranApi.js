import axios from "axios";

const BASE_URL = "https://api.quran.com/api/v4";

export const getArabicText = (surahNumber) => {
  return axios.get(
    `${BASE_URL}/quran/verses/uthmani?chapter_number=${surahNumber}`
  );
};

export const getTranslation = (surahNumber, translationId) => {
  return axios.get(
    `${BASE_URL}/quran/translations/${translationId}?chapter_number=${surahNumber}`
  );
};

export const getTafsir = (surahNumber, tafsirId) => {
  return axios.get(
    `${BASE_URL}/quran/tafsirs/${tafsirId}?chapter_number=${surahNumber}`
  );
};
