// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { Howl } from "howler";
// // import "./SurahView.css";

// // export default function SurahView({ surahIndex, onBack }) {
// //   const [ayahs, setAyahs] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [currentAudio, setCurrentAudio] = useState(null);

// //   useEffect(() => {
// //     async function loadSurah() {
// //       setLoading(true);

// //       const arabic = await axios.get(
// //         `https://api.alquran.cloud/v1/surah/${surahIndex}/ar.alafasy`
// //       );

// //       const english = await axios.get(
// //         `https://api.alquran.cloud/v1/surah/${surahIndex}/en.asad`
// //       );

// //       const merged = arabic.data.data.ayahs.map((a, i) => ({
// //         number: a.numberInSurah,
// //         arabic: a.text,
// //         audio: a.audio,
// //         translation: english.data.data.ayahs[i].text,
// //       }));

// //       setAyahs(merged);
// //       setLoading(false);
// //     }

// //     loadSurah();
// //   }, [surahIndex]);

// //   const playAudio = (url) => {
// //     if (currentAudio) currentAudio.stop();

// //     const sound = new Howl({ src: [url] });
// //     sound.play();
// //     setCurrentAudio(sound);
// //   };

// //   if (loading) return <div className="surah-loading">Loading...</div>;

// //   return (
// //     <div className="surah-view">
// //       <button className="back-btn" onClick={onBack}>← Back</button>

// //       <h2 className="surah-title">Surah {surahIndex}</h2>

// //       <div className="ayah-list">
// //         {ayahs.map((a) => (
// //           <div className="ayah-card" key={a.number}>
// //             <div className="ayah-arabic">{a.arabic}</div>
// //             <div className="ayah-translation">{a.translation}</div>

// //             <button className="audio-btn" onClick={() => playAudio(a.audio)}>
// //               ▶ Play
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// import React from "react";
// import quranArabic from "../../data/quranArabic.json";

// export default function SurahView({ surahIndex, onBack }) {
//   // Find the surah in JSON file
//   const surah = quranArabic.surahs.find(
//     (s) => s.number === surahIndex
//   );

//   if (!surah) return <div>Surah not found</div>;

//   return (
//     <div style={{ padding: "20px", direction: "rtl", textAlign: "right" }}>
//       <button onClick={onBack} style={{ marginBottom: "20px" }}>
//         ← Back
//       </button>

//       <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
//         {surah.name}
//       </h2>

//       {surah.ayahs.map((a) => (
//         <p key={a.number} style={{ fontSize: "26px", marginBottom: "12px" }}>
//           {a.text}
//         </p>
//       ))}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { getArabicText, getTranslation, getTafsir } from "../../api/quranApi";
import malayalam from "../../data/malayalam.json";


export default function SurahView({ surahIndex, onBack }) {
  const [arabic, setArabic] = useState([]);
  const [translation, setTranslation] = useState([]);
  const [tafsir, setTafsir] = useState([]);

  const [activeTab, setActiveTab] = useState("arabic"); // arabic | translation | tafsir

  useEffect(() => {
    async function loadData() {
      // Load Arabic
      const ar = await getArabicText(surahIndex);
      setArabic(ar.data.verses);

      // Load Translation (Pick translator: 131 = Sahih International)
      const tr = await getTranslation(surahIndex, 131);
      setTranslation(tr.data.translations);

      // Load Tafsir (Pick tafsir: 169 = Ibn Kathir)
      const tf = await getTafsir(surahIndex, 169);
      setTafsir(tf.data.tafsirs);
    }

    loadData();
  }, [surahIndex]);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={onBack} style={{ marginBottom: "20px" }}>
        ← Back
      </button>

      {/* Tabs */}
      {/* <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("arabic")}>Arabic</button>
        <button onClick={() => setActiveTab("translation")}>Meaning</button>
        <button onClick={() => setActiveTab("tafsir")}>Explanation</button>
      </div> */}
      {/* Translation Selector */}
<div style={{ marginBottom: "20px" }}>
  <select
    onChange={(e) => {
      const translationId = e.target.value;
      getTranslation(surahIndex, translationId).then((res) =>
        setTranslation(res.data.translations)
      );
    }}
    style={{
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      width: "200px",
    }}
  >
    <option value="131">English – Sahih International</option>
    <option value="20">English – Muhsin Khan</option>
    <option value="161">Urdu – Jalandhri</option>
    <option value="214">Hindi – Suhel Farooq</option>
    <option value="241">Malayalam – Kareem Kari</option>
  </select>
</div>

      <div
  style={{
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  }}
>
  {["arabic", "translation", "tafsir"].map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      style={{
        padding: "10px 20px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        background: activeTab === tab ? "#0084ff" : "#eee",
        color: activeTab === tab ? "white" : "black",
        fontWeight: "bold",
      }}
    >
      {tab === "arabic" && "Arabic"}
      {tab === "translation" && "Meaning"}
      {tab === "tafsir" && "Explanation"}
    </button>
  ))}
</div>


      {/* Arabic View */}
      {activeTab === "arabic" &&
        arabic.map((a) => (
          <p
            key={a.id}
            style={{
              direction: "rtl",
              textAlign: "right",
              fontSize: "28px",
              marginBottom: "15px",
            }}
          >
            {a.text_uthmani}
          </p>
        ))}
{activeTab === "translation" &&
  malayalam[surahIndex].ayahs.map((a) => (
    <div key={a.number} style={{ marginBottom: "20px" }}>
      <p style={{ direction: "rtl", textAlign: "right", fontSize: "26px" }}>
        {/* Arabic */} 
        {arabic.find(v => v.verse_key.endsWith(`:${a.number}`))?.text_uthmani}
      </p>
      <p style={{ fontSize: "18px", marginTop: "5px" }}>
        <b>Meaning {a.number}:</b> {a.meaning}
      </p>
    </div>
  ))}


      {/* Translation */}
      {/* {activeTab === "translation" &&
        translation.map((t) => (
          <p key={t.id} style={{ fontSize: "20px", marginBottom: "15px" }}>
            <b>Ayah {t.verse_key}:</b> {t.text}
          </p>
        ))} */}

      {/* Tafsir */}
      {activeTab === "tafsir" &&
  malayalam[surahIndex].ayahs.map((a) => (
    <div key={a.number} style={{ marginBottom: "25px" }}>
      <p style={{ direction: "rtl", textAlign: "right", fontSize: "26px" }}>
        {/* Arabic */}
        {arabic.find(v => v.verse_key.endsWith(`:${a.number}`))?.text_uthmani}
      </p>

      <p style={{ fontSize: "18px", marginTop: "5px" }}>
        <b>Meaning:</b> {a.meaning}
      </p>

      <p style={{ fontSize: "16px", marginTop: "5px", color: "#444" }}>
        <b>Explanation:</b> {a.explanation}
      </p>
    </div>
  ))}

      {/* {activeTab === "tafsir" &&
        tafsir.map((t) => (
          <div key={t.id} style={{ marginBottom: "20px" }}>
            <b>Ayah {t.verse_key}:</b>
            <p>{t.text}</p>
          </div>
        ))} */}
    </div>
  );
}
