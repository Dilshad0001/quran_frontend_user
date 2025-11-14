

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Share2 } from "lucide-react";
import { getAyatsBySurah } from "../data/ayatsData";
import { getSurahs } from "../data/surahApi";
import { getFractionsByAyat } from "../data/fractionAyatData";
import AyatContent from "../components/AyatContent";
import AyatSlider from "../components/AyatSlider";

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="text-gray-700" size={22} />
          </button>
          <h1
            className="text-lg font-semibold text-gray-800"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            {malayalamsurahName}
          </h1>
          <button
            onClick={handleShare}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Share2 className="text-gray-700" size={22} />
          </button>
        </div>
      </div>

      {/* Bismillah */}
      {id !== "9" && (
        <div className="max-w-2xl mx-auto px-4 mt-6 mb-6 text-center">
          <div className="bg-white rounded-xl py-6 shadow-sm border border-gray-200">
            <h3
              className="text-3xl font-semibold text-gray-800"
              style={{
                fontFamily: "Amiri, serif",
                letterSpacing: "0.02em",
              }}
              dir="rtl"
            >
              بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ
            </h3>
          </div>
        </div>
      )}

      {/* Main content */}
      {/* <div className="max-w-2xl mx-auto mb-28 px-4">
        <AyatContent ayats={ayats} view={view} toArabicNumber={toArabicNumber} />
      </div> */}
      <div className="max-w-2xl mx-auto mb-28 px-4">
  <AyatSlider ayats={ayats} toArabicNumber={toArabicNumber} />
</div>


      {/* <div className="max-w-2xl mx-auto mb-28 px-4"> */}
        {/* Default view: continuous Arabic */}
        {/* {!view && (
          <div
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            dir="rtl"
            style={{
              fontFamily: "Amiri, serif",
              whiteSpace: "normal",
              lineHeight: "3.5rem",
            }}
          >
            {ayats.map((ayat) => (
              <span key={ayat.id} className="text-3xl text-gray-800">
                {ayat.ayat_text}{" "}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 text-base mx-1">
                  {toArabicNumber(ayat.ayat_number)}
                </span>{" "}
              </span>
            ))}
          </div>
        )} */}

        {/* Tafseer or Meaning View */}
        {/* {view &&
          ayats.map((ayat) => (
            <div
              key={ayat.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4 overflow-hidden"
            >
              {ayat.fractions?.map((f) => (
                <div
                  key={f.id}
                  className="border-b border-gray-100 last:border-b-0"
                > */}
                  {/* Arabic */}
                  {/* <div className="bg-gray-50 p-4">
                    <p
                      className="text-2xl text-right text-gray-800 leading-relaxed"
                      dir="rtl"
                      style={{ fontFamily: "Amiri, serif" }}
                    >
                      {f.ayat_fraction_text}
                    </p>
                  </div> */}

                  {/* <div className="p-4 space-y-3"> */}
                    {/* Meaning */}
                    {/* <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1 h-4 bg-emerald-500 rounded"></div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          Meaning
                        </span>
                      </div>
                      <p className="text-base text-gray-700 leading-relaxed">
                        {f.ayat_fraction_meaning}
                      </p>
                    </div> */}

                    {/* Tafseer */}
                    {/* <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1 h-4 bg-blue-500 rounded"></div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          തഫ്സീർ
                        </span>
                      </div>
                      <p className="text-base text-gray-700 leading-relaxed">
                        {f.ayat_fraction_tafseer}
                      </p>
                    </div> */}
                  {/* </div>
                </div>
              ))} */}

              {/* Full Ayat */}
              {/* <div className="bg-gray-50 p-4 border-t-2 border-emerald-100">
                <p
                  className="text-3xl text-right text-gray-800 mb-3 leading-relaxed"
                  dir="rtl"
                  style={{ fontFamily: "Amiri, serif" }}
                >
                  {ayat.ayat_text}{" "}
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white text-base mx-1">
                    {toArabicNumber(ayat.ayat_number)}
                  </span>
                </p>
                <div className="bg-white rounded-lg p-3 mb-2 border border-gray-200">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {ayat.meaning_text}
                  </p>
                </div> */}
{/* 
                {view === "meaning" && (
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <p className="text-xs font-semibold text-blue-700 mb-1">
                      വാക്കുകളുടെ അർത്ഥം
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {ayat.word_meaning}
                    </p>
                  </div>
                )} */}
              {/* </div>
            </div>
          ))}
      </div> */}

      {/* Footer buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-3 flex gap-3">
          <button
            onClick={() => setView(view === "tafseer" ? null : "tafseer")}
            className={`flex-1 py-3.5 rounded-lg font-medium text-base transition-all ${
              view === "tafseer"
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            🧠 തഫ്‌സീർ
          </button>

          <button
            onClick={() => setView(view === "meaning" ? null : "meaning")}
            className={`flex-1 py-3.5 rounded-lg font-medium text-base transition-all ${
              view === "meaning"
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            💬 അർത്ഥം
          </button>
        </div>
      </div>
    </div>
  );
}

export default SurahDetailPage;