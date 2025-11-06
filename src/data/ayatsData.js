// export const ayatsData = {
//   1: [
//     {
//       id: 1,
//       arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
//       meaning: "അത്യന്തം കരുണാമയനും കാരുണ്യവാനുമായ അല്ലാഹുവിന്റെ നാമത്തിൽ",
//       wordMeaning: "بِسْمِ = നാമത്തിൽ | اللَّهِ = അല്ലാഹുവിന്റെ | الرَّحْمَٰنِ = അത്യന്തം കരുണാമയൻ | الرَّحِيمِ = കാരുണ്യവാൻ",
//       fractions: [
//         { text: "بِسْمِ اللَّهِ", meaning: "അല്ലാഹുവിന്റെ നാമത്തിൽ", tafseer: "..." },
//         { text: "الرَّحْمَٰنِ الرَّحِيمِ", meaning: "അത്യന്തം കരുണാമയനും കാരുണ്യവാനും", tafseer: "..." },
//       ],
//     },
//     // ...rest of ayats
//   ],
// };

// import axios from "axios";

// const BASE_URL = "https://qura-an-backend-tbdt.onrender.com";

// let ayatsData = [];

// (async () => {
//   try {
//     // 👇 Fetch all Ayats (you can filter by surah_id if needed)
//     const response = await axios.get(`${BASE_URL}/adminuser/ayat/?surah_id=1`);
//     ayatsData = response.data;
//     console.log("✅ Ayats fetched successfully:", ayatsData);
//   } catch (error) {
//     console.error("❌ Failed to fetch Ayats:", error);
//   }
// })();

// export default ayatsData;
import axios from "axios";

const BASE_URL = "https://qura-an-backend-tbdt.onrender.com"; // your backend URL

// ✅ Function to fetch ayats dynamically by surah_id
export const getAyatsBySurah = async (surahId) => {
  try {
    const response = await axios.get(`${BASE_URL}/adminuser/ayat/?surah_id=${surahId}`);
    return response.data; // returns ayats array
  } catch (error) {
    console.error("❌ Failed to fetch Ayats:", error);
    return [];
  }
};
