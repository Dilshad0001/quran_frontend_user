// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// function AyatSlider({ ayats, toArabicNumber }) {
//   return (
//     <Swiper spaceBetween={20} slidesPerView={1}>
//       {ayats.map((ayat) => (
//         // <SwiperSlide key={ayat.id}>
//         //   <div
//         //     dir="rtl"
//         //     className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
//         //     style={{ fontFamily: "Amiri, serif", minHeight: "70vh" }}
//         //   >
//         //     <span className="text-3xl text-gray-800">
//         //       {ayat.ayat_text}{" "}
//         //       <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 text-base mx-2">
//         //         {toArabicNumber(ayat.ayat_number)}
//         //       </span>
//         //     </span>
//         //   </div>
//         // </SwiperSlide>
//         <SwiperSlide>
//   <div
//     dir="rtl"
//     className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
//     style={{ fontFamily: "Amiri, serif", minHeight: "70vh", lineHeight: "3.2rem" }}
//   >
//     {ayats.map((ayat) => (
//       <span key={ayat.id} className="text-3xl text-gray-800">
//         {ayat.ayat_text}{" "}
//         <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 text-base mx-2">
//           {toArabicNumber(ayat.ayat_number)}
//         </span>
//       </span>
//     ))}
//   </div>
// </SwiperSlide>

//       ))}
//     </Swiper>
//   );
// }

// export default AyatSlider;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function AyatSlider({ ayats, toArabicNumber }) {

  // SPLIT AYATS INTO PAGES OF 6
  function chunkAyats(ayats, size) {
    let pages = [];
    for (let i = 0; i < ayats.length; i += size) {
      pages.push(ayats.slice(i, i + size));
    }
    return pages;
  }

  const pages = chunkAyats(ayats, 6); // 6 ayats per page

  return (
    <Swiper spaceBetween={20} slidesPerView={1}>
      {pages.map((pageAyats, index) => (
        <SwiperSlide key={index}>
        <div
        dir="rtl"
        style={{
            height: "75vh",
            overflow: "hidden",
            fontFamily: "Amiri, serif",
            lineHeight: "3rem",
            padding: "20px",
            backgroundColor: "#faf9f5",
            border: "1px solid #e5e4da",
            borderRadius: "12px"
        }}
        >

            {pageAyats.map((a) => (
              <span key={a.id} className="text-3xl">
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
  );
}

export default AyatSlider;
