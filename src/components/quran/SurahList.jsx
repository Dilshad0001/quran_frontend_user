// import React from "react";
// // import { SurahListRaw } from "quran-meta";
// // import {SurahListRaw} from "../../../node_modules/quran-meta/dist/"
// // import { SurahListRaw } from "quran-meta/dist/index.js";
// // import SurahListRaw from "../../data/surahListRaw";
// import { SurahList } from "../../data/surahListRaw";

// import "./SurahList.css";

// // export default function SurahList({ onSelect }) {
// export default function SurahListComponent({ onSelect }) {
//   return (
//     <div className="surah-list">
//       <h2 className="surah-list__title">Surahs</h2>
//       <ul className="surah-list__grid">
//         {SurahList.map((s) => (
//           <li
//             key={s.index}
//             className="surah-item"
//             onClick={() => onSelect(s.index)}
//           >
//             <div className="surah-item__num">{s.index}</div>

//             <div className="surah-item__meta">
//               <div className="surah-item__name">{s.transliteration.en}</div>
//               <div className="surah-item__arabic">{s.name}</div>
//               <div className="surah-item__info">
//                 {s.verses} ayahs · {s.revelationType}
//               </div>
//             </div>

//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React from "react";
import { SurahList } from "quran-meta";
import "./SurahList.css";

export default function SurahListComponent({ onSelect }) {
  return (
    <div className="surah-list">
      <h2 className="surah-list__title">Surahs</h2>

      <ul className="surah-list__grid">
        {/* {SurahList.map((s) => (
          <li
            key={s.surah}
            className="surah-item"
            onClick={() => onSelect(s.surah)}
          >
            <div className="surah-item__num">{s.surah}</div>

            <div className="surah-item__meta">
              <div className="surah-item__name">Surah {s.surah}</div>
              <div className="surah-item__arabic">{s.name}</div>
              <div className="surah-item__info">
                {s.ayahCount} ayahs · Order {s.revelationOrder}
              </div>
            </div>

          </li>
        ))} */}
        {SurahList.map((s, index) => (
  <li
    key={index}
    className="surah-item"
    onClick={() => onSelect(index + 1)}
  >
    <div className="surah-item__num">{index + 1}</div>

    <div className="surah-item__meta">
      <div className="surah-item__name">Surah {index + 1}</div>
      <div className="surah-item__arabic">{s.name}</div>
      <div className="surah-item__info">
        {s.ayahCount} ayahs · Order {s.revelationOrder}
      </div>
    </div>
  </li>
))}

      </ul>
    </div>
  );
}
