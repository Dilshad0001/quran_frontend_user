
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function AyatSlider({ ayats, toArabicNumber }) {

  function chunkAyats(ayats, size) {
    let pages = [];
    for (let i = 0; i < ayats.length; i += size) {
      pages.push(ayats.slice(i, i + size));
    }
    return pages;
  }

  const pages = chunkAyats(ayats, 6);

  return (
    <div dir="rtl">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        direction="horizontal"
        style={{ width: "100%", height: "100%" }}
      >
        {pages.map((pageAyats, index) => (
          <SwiperSlide key={index}>
            <div
              dir="rtl"
              style={{
                height: "75vh",
                fontFamily: "Amiri, serif",
                fontSize: "32px",
                lineHeight: "3rem",
                padding: "20px",
                backgroundColor: "#faf9f5",
                border: "1px solid #e5e4da",
                borderRadius: "12px",
                overflow: "hidden"
              }}
            >
              {pageAyats.map((a) => (
                <span key={a.id}>
                  {a.ayat_text}{" "}
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 text-base mx-2">
                    {toArabicNumber(a.ayat_number)}
                  </span>
                </span>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AyatSlider;
