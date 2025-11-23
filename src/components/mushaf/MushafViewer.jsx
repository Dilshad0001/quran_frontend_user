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
//         // setSvg(text);
//         let fixedSvg = text;

// // 1. Extract original width/height
// const widthMatch = text.match(/width="([^"]+)"/);
// const heightMatch = text.match(/height="([^"]+)"/);

// let w = widthMatch ? parseFloat(widthMatch[1]) : 800;
// let h = heightMatch ? parseFloat(heightMatch[1]) : 1200;

// // 2. Remove all width/height
// fixedSvg = fixedSvg
//   .replace(/width="[^"]*"/g, "")
//   .replace(/height="[^"]*"/g, "");

// // 3. FORCE a correct viewBox
// fixedSvg = fixedSvg.replace(
//   /<svg/,
//   `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet"`
// );

// // 4. Now set SVG
// // setSvg(fixedSvg);
// // setSvg(`
// //   <svg width="100%" height="auto" viewBox="0 0 1000 1500" preserveAspectRatio="xMidYMid meet">
// //     <g transform="scale(1)">
// //       ${fixedSvg}
// //     </g>
// //   </svg>
// // `);
// let content = text
//   .replace(/<\?xml[\s\S]*?<svg[^>]*>/, "")
//   .replace(/<\/svg>/, "");

// setSvg(`
//   <svg width="100%" height="auto" viewBox="0 0 510 729" preserveAspectRatio="xMidYMid meet">
//     <g transform="scale(3)">
//       ${content}
//     </g>
//   </svg>
// `);


//       } catch (err) {
//         console.error("Error loading SVG:", err);
//         setSvg("<p>Unable to load page</p>");
//       }
//     }

//     loadSvg();
//   }, [page]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
//         <button onClick={() => setPage((p) => Math.max(1, p - 1))}>Prev</button>
//         <span>Page {page}</span>
//         <button onClick={() => setPage((p) => Math.min(604, p + 1))}>Next</button>
//       </div>

//       {/* Render SVG */}
//       {/* <div
//         dangerouslySetInnerHTML={{ __html: svg }}
//         style={{
//           border: "1px solid #ddd",
//           padding: "10px",
//           background: "#fff",
//         }}
//       /> */}
//       <div
//   className="mushaf-svg"
//   dangerouslySetInnerHTML={{ __html: svg }}
// />

//     </div>
//   );
// }


import React, { useEffect, useState } from "react";

export default function MushafViewer({ startPage = 1 }) {
  const [page, setPage] = useState(startPage);
  const [svg, setSvg] = useState("");

  useEffect(() => {
    async function loadSvg() {
      try {
        const file = `/mushaf_svg/page_${String(page).padStart(3, "0")}.svg`;
        const res = await fetch(file);
        const text = await res.text();

        // ✅ REMOVE old SVG wrapper completely
        let content = text
          .replace(/<\?xml[\s\S]*?<svg[^>]*>/, "")
          .replace(/<\/svg>/, "");

        setSvg(`
  <svg width="100%" height="100%" viewBox="0 -0 500 1000" preserveAspectRatio="xMidYMid meet">
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml" style="width:100%; height:auto; transform:scaleX(2) scaleY(2.35); transform-origin: top left;">
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
  <div className=" bg-red-500 min-h-screen">
    
    {/* Buttons */}
    {/* <div className="flex items-center gap-3 mb-5">
      <button
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => setPage((p) => Math.max(1, p - 1))}
      >
        Prev
      </button>

      <span className="text-lg font-semibold">Page {page}</span>

      <button
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => setPage((p) => Math.min(604, p + 1))}
      >
        Next
      </button>
    </div> */}

    {/* SVG Viewer */}
    <div
      className="mushaf-svg w-full h-screen overflow-hidden bg-amber-600 "
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  </div>
);

}
