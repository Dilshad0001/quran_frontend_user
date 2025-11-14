

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Share2 } from "lucide-react";
import { getAyatsBySurah } from "../data/ayatsData";
import { getSurahs } from "../data/surahApi";
import { getFractionsByAyat } from "../data/fractionAyatData";
import AyatContent from "../components/AyatContent";
import AyatSlider from "../components/AyatSlider";
import SurahHeader from "../components/SurahHeader";
import TopHeader from "../components/TopHeader";

function SurahDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ayats, setAyats] = useState([]);
  const [view, setView] = useState(null);
  const [surahName, setSurahName] = useState("");
  const [malayalamsurahName, setMalayalamSurahName] = useState("");

  useEffect(() => {
    const fetchAyats = async () => {
      const data = await getAyatsBySurah(id);

      const enriched = await Promise.all(
        data.map(async (ayat) => {
          const fractions = await getFractionsByAyat(ayat.id);
          return { ...ayat, fractions };
        })
      );
      setAyats(enriched);

      const surahs = await getSurahs();
      const found = surahs.find((s) => s.id === Number(id));
      setSurahName(found?.arabic || "");
      setMalayalamSurahName(found?.malayalam || "");
    };

    fetchAyats();
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  const toArabicNumber = (num) => {
    const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return num.toString().replace(/[0-9]/g, (d) => arabicDigits[d]);
  };

  return (
    <div className="min-h-screen  ">
      <TopHeader title={malayalamsurahName} onShare={handleShare} />
      {/* <div className="bg-green-800">
      <SurahHeader title={surahName} />
      </div> */}

      <AyatSlider 
  ayats={ayats} 
  toArabicNumber={toArabicNumber} 
  surahName={surahName}
/>

    </div>
  );
}

export default SurahDetailPage;