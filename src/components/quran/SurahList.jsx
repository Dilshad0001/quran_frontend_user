
import React from "react";
import { SurahList } from "quran-meta";
import "./SurahList.css";

export default function SurahListComponent({ onSelect }) {
  return (
    <div className="surah-list">
      <h2 className="surah-list__title">Surahs</h2>

      <ul className="surah-list__grid">

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
