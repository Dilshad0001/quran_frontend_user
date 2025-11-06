
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { ArrowLeft, Share2 } from "lucide-react";
// // import ayatsData from "../data/ayatsData"; 
// import { getAyatsBySurah } from "../data/ayatsData";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Share2 } from "lucide-react";
import { getAyatsBySurah } from "../data/ayatsData";  

function SurahDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ayats, setAyats] = useState([]);
  const [view, setView] = useState(null);
  // const ayats = ayatsData[id] || [];
  // const [view, setView] = useState(null); 

    useEffect(() => {
    const fetchAyats = async () => {
      const data = await getAyatsBySurah(id);
      setAyats(data);
    };
    fetchAyats();
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white shadow-md border-b border-amber-200">
        <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-amber-100 rounded-lg">
            <ArrowLeft className="text-amber-800" />
          </button>
          <h1 className="text-2xl font-bold text-amber-900" style={{ fontFamily: "Amiri, serif" }}>
            سورة {id}
          </h1>
          <button onClick={handleShare} className="p-2 hover:bg-amber-100 rounded-lg">
            <Share2 className="text-amber-800" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* {ayats.map((ayat) => (
          <div key={ayat.id} className="bg-white rounded-2xl p-6 shadow-lg"> */}
          {ayats.map((ayat, index) => (
  <div key={`${ayat.ayat_number}-${index}`} className="bg-white rounded-2xl p-6 shadow-lg">
            {/* Default (Arabic only) */}
            {!view && (
              <p className="text-2xl leading-loose text-right text-amber-900" style={{ fontFamily: "Amiri, serif" }} dir="rtl">
                {ayat.ayat_text} ۝{ayat.ayat_number}
              </p>
            )}

            {/* Meaning (show tafseer too) */}
            {view === "meaning" && (
              <>
                {/* Show tafseer fractions first */}
                {/* {ayat.fractions.map((f, i) => (
                  <div key={i} className="bg-amber-50 rounded-xl p-4 mb-3"> */}
                  {/* {ayat.fractions.map((f) => (
  <div key={f.id || f.text} className="bg-amber-50 rounded-xl p-4 mb-3"> */}
  {/* {ayat.fractions?.map((f, index) => (
  <div key={`${f.id || f.text || index}`} className="bg-amber-50 rounded-xl p-4 mb-3">

                    <p
                      className="text-xl text-right text-amber-900"
                      dir="rtl"
                      style={{ fontFamily: "Amiri, serif" }}
                    >
                      {f.text}
                    </p>
                    <p className="text-sm text-amber-800 mt-1">
                      <strong>അർത്ഥം:</strong> {f.meaning}
                    </p>
                    <p className="text-sm text-amber-700 mt-1 italic">
                      <strong>തഫ്സീർ:</strong> {f.tafseer}
                    </p>
                  </div>
                ))} */}

                {ayat.fractions?.map((f, index) => (
  <div key={`${ayat.ayat_number}-${index}`} className="bg-amber-50 rounded-xl p-4 mb-3">
    <p
      className="text-xl text-right text-amber-900"
      dir="rtl"
      style={{ fontFamily: "Amiri, serif" }}
    >
      {f.text}
    </p>
    <p className="text-sm text-amber-800 mt-1">
      <strong>അർത്ഥം:</strong> {f.meaning}
    </p>
    <p className="text-sm text-amber-700 mt-1 italic">
      <strong>തഫ്സീർ:</strong> {f.tafseer}
    </p>
  </div>
))}


                {/* Then full ayat + meaning + word meaning */}
                <div className="mt-4 border-t border-amber-100 pt-4">
                  <p
                    className="text-2xl text-right text-amber-900 mb-4"
                    style={{ fontFamily: "Amiri, serif" }}
                    dir="rtl"
                  >
                    {ayat.ayat_text} ۝{ayat.id}
                  </p>
                  <p className="text-base text-amber-800 bg-amber-50 rounded-lg p-3 mb-2">
                    <strong>അർത്ഥം:</strong> {ayat.meaning_text}
                  </p>
                  <p className="text-sm text-amber-700 bg-amber-50 rounded-lg p-3">
                    <strong>വാക്കുകളുടെ അർത്ഥം:</strong> {ayat.word_meaning}
                  </p>
                </div>
              </>
            )}


            {/* Tafseer */}
            {view === "tafseer" && (
              <>
                {/* {ayat.fractions.map((f, i) => (
                  <div key={i} className="bg-amber-50 rounded-xl p-4 mb-3"> */}
                  {/* {ayat.fractions?.map((f, index) => (
  <div key={`${f.id || f.text || index}`} className="bg-amber-50 rounded-xl p-4 mb-3">
                    <p className="text-xl text-right text-amber-900" dir="rtl" style={{ fontFamily: "Amiri, serif" }}>
                      {f.text}
                    </p>
                    <p className="text-sm text-amber-800 mt-1">
                      <strong>അർത്ഥം:</strong> {f.meaning}
                    </p>
                    <p className="text-sm text-amber-700 mt-1 italic">
                      <strong>തഫ്സീർ:</strong> {f.tafseer}
                    </p>
                  </div>
                ))} */}

                {ayat.fractions?.map((f, index) => (
  <div key={`${ayat.ayat_number}-${index}`} className="bg-amber-50 rounded-xl p-4 mb-3">
    <p
      className="text-xl text-right text-amber-900"
      dir="rtl"
      style={{ fontFamily: "Amiri, serif" }}
    >
      {f.text}
    </p>
    <p className="text-sm text-amber-800 mt-1">
      <strong>അർത്ഥം:</strong> {f.meaning}
    </p>
    <p className="text-sm text-amber-700 mt-1 italic">
      <strong>തഫ്സീർ:</strong> {f.tafseer}
    </p>
  </div>
))}

                <div className="mt-4 border-t border-amber-100 pt-4">
                  <p className="text-2xl text-right text-amber-900 mb-2" style={{ fontFamily: "Amiri, serif" }} dir="rtl">
                    {ayat.ayat_text} ۝{ayat.id}
                  </p>
                  <p className="text-base text-amber-800 bg-amber-50 rounded-lg p-3">
                    <strong>പൂർണ്ണ അർത്ഥം:</strong> {ayat.meaning_text}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Footer buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-amber-200 shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-3 flex gap-3">

        <button
          onClick={() => setView(view === "tafseer" ? null : "tafseer")}
          className={`flex-1 py-4 rounded-xl font-bold text-lg ${
            view === "tafseer"
              ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
              : "bg-amber-100 text-amber-800 hover:bg-amber-200"
          }`}
        >
          🧠 തഫ്‌സീർ
        </button>

          <button
            onClick={() => setView("meaning")}
            className={`flex-1 py-4 rounded-xl font-bold text-lg ${
              view === "meaning"
                ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
                : "bg-amber-100 text-amber-800 hover:bg-amber-200"
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
