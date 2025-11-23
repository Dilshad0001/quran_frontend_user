// import React, { useEffect, useState } from "react";

// /**
//  * QuranTest.jsx
//  * - First file (start from zero).
//  * - Dynamically imports quran-meta JSON files so Vite/ESM doesn't fail on named exports.
//  * - Renders a small preview (first surah's first verses) in RTL to verify data loads.
//  *
//  * After you complete this file, tell me "done" and I'll give the next file.
//  */

// export default function QuranTest() {
//   const [surahs, setSurahs] = useState(null);
//   const [verses, setVerses] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let mounted = true;
//     Promise.all([
//       import("quran-meta/dist/surahs.json").then((m) => m.default ?? m),
//       import("quran-meta/dist/verses.json").then((m) => m.default ?? m),
//     ])
//       .then(([s, v]) => {
//         if (!mounted) return;
//         setSurahs(s);
//         setVerses(v);
//       })
//       .catch((err) => {
//         console.error(err);
//         if (!mounted) return;
//         setError(err.message || String(err));
//       });
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   if (error) return <div>Error loading quran-meta: {error}</div>;
//   if (!surahs || !verses) return <div>Loading quran-meta…</div>;

//   // Normalize surah list (quran-meta may export object or array)
//   const surahList = Array.isArray(surahs) ? surahs : Object.values(surahs);
//   const firstSurah = surahList[0];
//   const surahNumber = firstSurah.number ?? firstSurah.id ?? firstSurah.surah_number ?? 1;

//   // Get a few verses from the selected surah (verses may be object keyed by id)
//   const versesList = Array.isArray(verses) ? verses : Object.values(verses);
//   const firstSurahVerses = versesList.filter((vv) => Number(vv.surah_number ?? vv.surah) === Number(surahNumber)).slice(0, 12);

//   return (
//     <div style={{ padding: 20, fontFamily: 'Noto Naskh Arabic, "Scheherazade New", serif' }}>
//       <h3 style={{ marginBottom: 12 }}>Mushaf Madina — Prototype (preview)</h3>

//       {/* Container that will later be styled line-by-line.
//           For now this shows RTL verses so we confirm JSON import works. */}
//       <div dir="rtl" style={{ fontSize: 34, lineHeight: 1.9, textAlign: "justify" }}>
//         {firstSurahVerses.map((v) => (
//           <div
//             key={v.id ?? `${v.surah_number}-${v.verse_number ?? v.verse}` }
//             style={{ display: "block", marginBottom: 8, whiteSpace: "pre-wrap" }}
//             // quran-meta verses may include html-escaped or plain text; use innerHTML if it contains markup
//             dangerouslySetInnerHTML={{ __html: v.text || v.arabic_text || v.quran_text || "" }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
