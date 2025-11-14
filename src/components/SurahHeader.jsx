import React from "react";
import headerImg from "../assets/surah-header.png";

function SurahHeader({ title }) {
  return (
    <div className="w-full flex justify-center my-4">
      <div className="relative w-full max-w-xl">
        {/* <img
          src={headerImg}
          alt="Surah Header"
          className="w-full object-contain"
          style={{ height: "60px" }}
        /> */}
        <img
  src={headerImg}
  alt="Surah Header"
  style={{
    width: "100%",        // FULL WIDTH
    height: "50px",       // YOUR FIXED HEIGHT
    objectFit: "fill"     // STRETCH to fill the box
  }}
/>

        <div className="absolute inset-0 flex items-center justify-center">
          <h2
            className="text-3xl text-gray-900"
            style={{ fontFamily: "'Amiri', serif" }}
            dir="rtl"
          >
            سورة{title}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SurahHeader;
