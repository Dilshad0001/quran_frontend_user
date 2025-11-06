// export const surahs = [
//   { id: 1, arabic: 'الفاتحة', malayalam: 'അല്‍ ഫാതിഹ', totalAyats: 7 },
//   { id: 2, arabic: 'البقرة', malayalam: 'അല്‍ ബഖറ', totalAyats: 286 },
// ];

// export const ayatsData = {
//   1: [
//     {
//       id: 1,
//       arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
//       meaning: 'അത്യന്തം കരുണാമയനും കാരുണ്യവാനുമായ അല്ലാഹുവിന്റെ നാമത്തിൽ',
//     },
//     {
//       id: 2,
//       arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
//       meaning: 'സകല പ്രശംസകളും ലോകങ്ങളുടെ രക്ഷിതാവായ അല്ലാഹുവിനുള്ളതാണ്',
//     },
//   ],
//   2: [
//     {
//       id: 1,
//       arabic: 'الم',
//       meaning: 'അലിഫ് ലാം മീം',
//     },
//   ],
// };
import axios from "axios";

const BASE_URL = "https://qura-an-backend-tbdt.onrender.com";

let ayatsData = [];

(async () => {
  try {
    // 👇 Fetch all Ayats (you can filter by surah_id if needed)
    const response = await axios.get(`${BASE_URL}/adminuser/ayat/?surah_id=1`);
    ayatsData = response.data;
    console.log("✅ Ayats fetched successfully:", ayatsData);
  } catch (error) {
    console.error("❌ Failed to fetch Ayats:", error);
  }
})();

export default ayatsData;
