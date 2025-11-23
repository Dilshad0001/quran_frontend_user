

import React, { useEffect, useState } from "react";
import AyatContent from "../AyatContent";
import { useNavigate, useParams } from "react-router-dom";
import { getAyatsBySurah } from "../../data/ayatsData";

export default function MushafViewer({ startPage = 1 }) {
  // const [page, setPage] = useState(startPage);
  const [svg, setSvg] = useState("");
  // const {id}=useParams()
  // const { page, surahId } = useParams();
  const { page: pageParam, surahId } = useParams();
const [page, setPage] = useState(Number(pageParam));



  // 👉 NEW: to toggle meaning/tafseer view
  const [showContent, setShowContent] = useState(false);   
  const [viewType, setViewType] = useState(null);          
  const [ayats, setAyats] = useState([]);
  // const [page, setPage] = useState(Number(page));


  // 👉 Detect double tap
  const [lastTap, setLastTap] = useState(0);

  const handleDoubleTap = (e) => {
    const currentTime = Date.now();
    const tapGap = currentTime - lastTap;

    if (tapGap < 250) {
      const x = e.clientX || e.touches?.[0]?.clientX;
      const screenWidth = window.innerWidth;

      if (x < screenWidth / 2) {
        setPage((p) => Math.max(1, p - 1));
      } else {
        setPage((p) => Math.min(604, p + 1));
      }
    }

    setLastTap(currentTime);
  };

  // 👉 Swipe handlers
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) setPage((p) => Math.min(604, p + 1));
    else if (swipeDistance < -50) setPage((p) => Math.max(1, p - 1));
  };
  // console.log("id==",id);
  

  // Load SVG page
  useEffect(() => {
    async function loadSvg() {
      try {
        // const file = `/mushaf_svg/page_${String(page).padStart(3, "0")}.svg`;
        const file = `/mushaf_svg/${String(page).padStart(3, "0")}.svg`;
        const res = await fetch(file);
        const text = await res.text();

        setSvg(`
          <svg width="100%" height="100%" viewBox="0 0 500 1000" preserveAspectRatio="xMidYMid meet">
            <foreignObject width="100%" height="100%">
              <div xmlns="http://www.w3.org/1999/xhtml"
                   style="width:100%; transform:scaleX(2) scaleY(2.35); transform-origin: top left;">
                ${text}
              </div>
            </foreignObject>
          </svg>
        `);
      } catch (err) {
        console.error("Error loading SVG:", err);
        setSvg("<p>Unable to load page</p>");
      }
    }

    loadSvg();
  }, [page]);

  useEffect(() => {
  async function loadAyats() {
    const data = await getAyatsBySurah(surahId);   // ← Example: Surah 1

    console.log("data ayat==",data);
    
    setAyats(data);
  }
  loadAyats();
}, []);


const toArabicNumber = (n) => {
  return n.toString().replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
};
console.log("ayats in MushafViewer===",ayats);

  return (
    <div
      className="min-h-screen select-none relative overflow-hidden"  // 👉 ADDED overflow-hidden
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleDoubleTap}
      onTouchEndCapture={handleDoubleTap}
    >
      {/* 👉 FIXED FULLSCREEN QURAN PAGE */}
      <div
        className="mushaf-svg w-full h-screen overflow-hidden fixed top-0 left-0 touch-none"
        dangerouslySetInnerHTML={{ __html: svg }}
      />

      {/* 👉 NEW FIXED BUTTON BAR */}
      <div
        className="fixed bottom-3 left-0 w-full flex justify-center gap-4 z-50"
        style={{ pointerEvents: "auto" }}   // 👉 allow button clicks
      >
        <button
          onClick={() => {
            setViewType("meaning");
            setShowContent(true);
          }}
          className="px-4 py-2 bg-emerald-600 text-white rounded-xl shadow"
        >
          Meaning
        </button>

        <button
          onClick={() => {
            setViewType("tafseer");
            setShowContent(true);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow"
        >
          Tafseer
        </button>
      </div>

      {/* 👉 POPUP CONTENT PANEL (Meaning/Tafseer) */}
      {showContent && (
        <div className="fixed inset-0  backdrop-blur flex justify-center items-center  bg-amber-400">
          <div className=" bg-white rounded-xl w-full h-full  ">

      <h2 className="text-center text-2xl font-bold py-4">
  {ayats[0]?.surah_detail?.arabic
    ? `سورة ${ayats[0].surah_detail.arabic}`
    : "Surah"}
</h2>

            <AyatContent ayats={ayats} view={viewType} toArabicNumber={toArabicNumber} />

          </div>
        </div>
      )}
    </div>
  );
}
