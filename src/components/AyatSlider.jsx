
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import SurahHeader from "../components/SurahHeader";

// function AyatSlider({ ayats, toArabicNumber, surahName }) {

//   // ---- Character Based Pagination ----
//   function chunkAyats(ayats, limit = 450) {
//     let pages = [];
//     let current = [];
//     let length = 0;

//     ayats.forEach(a => {
//       let textLength = a.ayat_text.length;

//       // If adding this ayat exceeds the limit → push & start new page
//       if (length + textLength > limit) {
//         pages.push(current);
//         current = [];
//         length = 0;
//       }

//       current.push(a);
//       length += textLength;
//     });

//     if (current.length) pages.push(current);
//     return pages;
//   }

//   // Use character limit (NOT 6 ayats)
//   const pages = chunkAyats(ayats, 450); // adjust 450 if needed

//   return (
//     <div>

//       {/* Ayat Slider */}
//       <div dir="rtl">
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           direction="horizontal"
//           style={{ width: "100%", height: "100%" }}
//         >
//           {pages.map((pageAyats, index) => (
//             <SwiperSlide key={index}>

//   {/* Show Surah header only on first slide */}
//   {index === 0 && (
//     <div className="w-full flex flex-col items-center mb-4">

//       <SurahHeader title={surahName} />

//       {/* Bismillah */}
//       <div style={{
//         fontFamily: "Amiri, serif",
//         fontSize: "34px",
//         marginTop: "10px"
//       }}>
//         بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ
//       </div>

//     </div>
//   )}

//   {/* Ayat Container */}
//   <div
//     dir="rtl"
//     style={{
//       height: "75vh",
//       fontFamily: "Amiri, serif",
//       fontSize: "32px",
//       lineHeight: "3rem",
//       padding: "20px",
//       backgroundColor: "#faf9f5",
//       border: "1px solid #e5e4da",
//       borderRadius: "12px",
//       overflow: "hidden",
//     }}
//   >
//     {pageAyats.map((a, i) => (
//       <span key={a.id}>
//         {a.ayat_text}{" "}

//         {/* Shift ayat numbers by +1 so Bismillah is index 1 */}
//         <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 text-base mx-2">
//           {toArabicNumber(a.ayat_number + 1)}
//         </span>
//       </span>
//     ))}
//   </div>

// </SwiperSlide>

//           ))}
//         </Swiper>
//       </div>

//     </div>
//   );
// }

// export default AyatSlider;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SurahHeader from "../components/SurahHeader";

function AyatSlider({ ayats, toArabicNumber, surahName }) {

  // -------- Character Based Pagination (15 lines ≈ 650 chars) --------
  function chunkAyats(ayats, limit = 650) {
    let pages = [];
    let current = [];
    let length = 0;

    ayats.forEach(a => {
      let textLength = a.ayat_text.length;

      if (length + textLength > limit) {
        pages.push(current);
        current = [];
        length = 0;
      }

      current.push(a);
      length += textLength;
    });

    if (current.length) pages.push(current);
    return pages;
  }

  const pages = chunkAyats(ayats, 650);

  return (
    <div>

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
                  overflow: "hidden",
                }}
              >

                {/* Heading + Bismillah ONLY on first slide and inside box */}
                {index === 0 && (
                  <>
                    <div style={{ textAlign: "center", marginBottom: "10px" }}>
                      <SurahHeader title={surahName} />
                    </div>

                    <div style={{
                      fontFamily: "Amiri, serif",
                      fontSize: "34px",
                      textAlign: "center",
                      marginBottom: "20px"
                    }}>
                      بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ
                    </div>
                  </>
                )}

                {/* Ayats */}
                {pageAyats.map((a) => (
                  <span key={a.id}>
                    {a.ayat_text}{" "}
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 text-base mx-2">
                      {toArabicNumber(
                        index === 0 ? a.ayat_number + 1 : a.ayat_number
                      )}
                    </span>
                  </span>
                ))}
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
}

export default AyatSlider;
