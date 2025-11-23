

// export default ayatsData;
import axios from "axios";

const BASE_URL = "https://qura-an-backend-2.onrender.com"; // your backend URL

// ✅ Function to fetch ayats dynamically by surah_id
export const getAyatsBySurah = async (surahId) => {
  console.log("surah id==",surahId);
  
  try {
    const response = await axios.get(`${BASE_URL}/user/ayat/?surah_id=${surahId}`);
    return response.data; // returns ayats array
  } catch (error) {
    console.error("❌ Failed to fetch Ayats:", error);
    return [];
  }
};
