

// import React, { useEffect, useState } from "react";

// export default function MushafViewer({ startPage = 1 }) {
//   const [page, setPage] = useState(startPage);
//   const [svg, setSvg] = useState("");
  

//   useEffect(() => {
//     async function loadSvg() {
//       try {
//         const file = `/mushaf_svg/page_${String(page).padStart(3, "0")}.svg`;
//         const res = await fetch(file);
//         const text = await res.text();

//         // ✅ REMOVE old SVG wrapper completely
//         let content = text
//           .replace(/<\?xml[\s\S]*?<svg[^>]*>/, "")
//           .replace(/<\/svg>/, "");

//         setSvg(`
//   <svg width="100%" height="100%" viewBox="0 -0 500 1000" preserveAspectRatio="xMidYMid meet">
//     <foreignObject width="100%" height="100%">
//       <div xmlns="http://www.w3.org/1999/xhtml" style="width:100%; height:auto; transform:scaleX(2) scaleY(2.35); transform-origin: top left;">
//         ${text}
//       </div>
//     </foreignObject>
//   </svg>
// `);


//       } catch (err) {
//         console.error("Error loading SVG:", err);
//         setSvg("<p>Unable to load page</p>");
//       }
//     }

//     loadSvg();
//   }, [page]);

// return (
//   <div className="  min-h-screen">
    
//     {/* Buttons */}
//     {/* <div className="flex items-center gap-3 mb-5">
//       <button
//         className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//         onClick={() => setPage((p) => Math.max(1, p - 1))}
//       >
//         Prev
//       </button>

//       <span className="text-lg font-semibold">Page {page}</span>

//       <button
//         className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//         onClick={() => setPage((p) => Math.min(604, p + 1))}
//       >
//         Next
//       </button>
//     </div> */}

//     {/* SVG Viewer */}
//     <div
//       className="mushaf-svg w-full h-screen overflow-hidden "
//       dangerouslySetInnerHTML={{ __html: svg }}
//     />
//   </div>
// );

// }



// =============================================================================================




// import React, { useEffect, useState } from "react";

// export default function MushafViewer({ startPage = 1 }) {
//   const [page, setPage] = useState(startPage);
//   const [svg, setSvg] = useState("");

//   // ============================
//   // 🌙 STATE
//   // ============================
//   const [zoom, setZoom] = useState(1);
//   const [lastTap, setLastTap] = useState(0);
//   const [fade, setFade] = useState(false);

//   // Swipe
//   const [touchStartX, setTouchStartX] = useState(0);
//   const [touchEndX, setTouchEndX] = useState(0);

//   // ============================
//   // 🌙 SWIPE HANDLERS (mobile)
//   // ============================
//   const handleTouchStart = (e) => {
//     setTouchStartX(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEndX(e.touches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     const swipe = touchStartX - touchEndX;

//     if (swipe > 60) nextPage();
//     else if (swipe < -60) prevPage();
//   };

//   // ============================
//   // 🌙 DOUBLE-TAP ZOOM
//   // ============================
//   const handleDoubleTap = () => {
//     const now = Date.now();
//     if (now - lastTap < 300) {
//       // double tap
//       setZoom((z) => (z === 1 ? 2 : 1));
//     }
//     setLastTap(now);
//   };

//   // ============================
//   // 🌙 LAPTOP KEYBOARD PAGE NAV
//   // ============================
//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === "ArrowLeft") prevPage();
//       if (e.key === "ArrowRight") nextPage();
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, []);

//   // ============================
//   // 🌙 MOUSE WHEEL (Laptop)
//   // ============================
//   const handleWheel = (e) => {
//     if (e.deltaY > 0) nextPage();
//     else prevPage();
//   };

//   // ============================
//   // 🌙 PAGE NAV FUNCTIONS
//   // ============================
//   const nextPage = () => {
//     setFade(true);
//     setPage((p) => Math.min(604, p + 1));
//   };

//   const prevPage = () => {
//     setFade(true);
//     setPage((p) => Math.max(1, p - 1));
//   };

//   // ============================
//   // 🌙 LOAD SVG
//   // ============================
//   useEffect(() => {
//     async function loadSvg() {
//       try {
//         const file = `/mushaf_svg/page_${String(page).padStart(3, "0")}.svg`;
//         const res = await fetch(file);
//         const text = await res.text();

//         setSvg(`
//           <svg width="100%" height="100%" viewBox="0 0 500 1000" preserveAspectRatio="xMidYMid meet">
//             <foreignObject width="100%" height="100%">
//               <div xmlns="http://www.w3.org/1999/xhtml"
//                 style="width:100%; height:auto; transform:scaleX(2) scaleY(2.35); transform-origin: top left;">
//                 ${text}
//               </div>
//             </foreignObject>
//           </svg>
//         `);

//         setTimeout(() => setFade(false), 150);
//       } catch (err) {
//         console.error("Error loading SVG:", err);
//         setSvg("<p>Unable to load page</p>");
//       }
//     }

//     loadSvg();
//   }, [page]);

//   return (
//     <div
//       className="relative min-h-screen bg-white"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//       onClick={handleDoubleTap}
//       onWheel={handleWheel}
//     >
//       {/* Quran SVG */}
//       <div
//         className={`transition-opacity duration-150 ${fade ? "opacity-0" : "opacity-100"}`}
//         style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
//         dangerouslySetInnerHTML={{ __html: svg }}
//       />

//       {/* FOOTER PAGE NUMBER */}
//       <div className="absolute bottom-5 left-0 right-0 text-center text-gray-600 text-lg font-semibold">
//         Page {page}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";

export default function MushafViewer({ startPage = 1 }) {
  const [page, setPage] = useState(startPage);
  const [svg, setSvg] = useState("");

  // 👉 Detect double tap
  const [lastTap, setLastTap] = useState(0);

  const handleDoubleTap = (e) => {
    const currentTime = Date.now();
    const tapGap = currentTime - lastTap;

    if (tapGap < 250) {
      // 👉 DOUBLE TAP
      const x = e.clientX || e.touches?.[0]?.clientX;
      const screenWidth = window.innerWidth;

      if (x < screenWidth / 2) {
        // 👉 Double-tap LEFT → Previous page
        setPage((p) => Math.max(1, p - 1));
      } else {
        // 👉 Double-tap RIGHT → Next page
        setPage((p) => Math.min(604, p + 1));
      }
    }

    setLastTap(currentTime);
  };

  // 👉 Swipe handlers (for mobile)
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) {
      setPage((p) => Math.min(604, p + 1));
    } else if (swipeDistance < -50) {
      setPage((p) => Math.max(1, p - 1));
    }
  };

  // 👉 Load SVG page
  useEffect(() => {
    async function loadSvg() {
      try {
        const file = `/mushaf_svg/page_${String(page).padStart(3, "0")}.svg`;
        const res = await fetch(file);
        const text = await res.text();

        setSvg(`
      <svg width="100%" height="100%" viewBox="0 0 500 1000" preserveAspectRatio="xMidYMid meet">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml" style="width:100%; transform:scaleX(2) scaleY(2.35); transform-origin: top left;">
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

  return (
    <div
      className="min-h-screen select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleDoubleTap}      // ⭐ DOUBLE-TAP HANDLER HERE
      onTouchEndCapture={handleDoubleTap} // ⭐ MOBILE DOUBLE TAP
    >
      <div
        className="mushaf-svg w-full h-screen overflow-hidden"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
}
