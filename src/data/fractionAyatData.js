import axios from "axios";

const BASE_URL = "https://qura-an-backend-tbdt.onrender.com";

// ✅ Fetch fractions by Ayat ID
export const getFractionsByAyat = async (ayatId) => {
  try {
    const res = await axios.get(`${BASE_URL}/user/fraction-ayat/?ayat_id=${ayatId}`);
    return res.data;
  } catch (error) {
    console.error("❌ Failed to fetch fractions:", error);
    return [];
  }
};
