
// import React from "react";
// import HTMLFlipBook from "react-pageflip";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import { useSearchParams } from "react-router-dom";

// function MushafFlip() {
//   const totalPages = 604;
//   const [params] = useSearchParams();
//   const goToPage = Number(params.get("page")) || 1;

//   const bookRef = React.useRef();

//   React.useEffect(() => {
//     if (bookRef.current) {
//       setTimeout(() => {
//         bookRef.current.pageFlip().turnToPage(goToPage - 1);
//       }, 300);
//     }
//   }, [goToPage]);

//   return (
//     <div className="w-full h-screen bg-black flex justify-center items-center">
//       {/* <HTMLFlipBook
//         ref={bookRef}
//         // width={400}
//         width={window.innerWidth}
//         // height={600}
//         height={window.innerHeight}
//         showCover={false}
//         mobileScrollSupport={true}
//         direction="rtl"
//         className="shadow-xl"
//       > */}
//       <HTMLFlipBook
//   ref={bookRef}
//   width={window.innerWidth}
//   height={window.innerHeight}
//   size="stretch"     // MUST add this
//   minWidth={300}
//   maxWidth={4000}
//   minHeight={300}
//   maxHeight={4000}
//   showCover={false}
//   mobileScrollSupport={true}
//   direction="rtl"
// >

//         {Array.from({ length: totalPages }).map((_, i) => (
//   <div
//     key={i}
//     className="bg-yellow-600 flex justify-center items-center h-screen w-screen"
//   >
//     <TransformWrapper minScale={1} maxScale={3}>
//       <TransformComponent>
//         <img
//           src={`/mushaf/${i + 1}.jpg`}
//           style={{
//             height: "100%",
//             width: "100%",
//             objectFit: "fill"
//           }}
//         />
//       </TransformComponent>
//     </TransformWrapper>
//   </div>
// ))}

//       </HTMLFlipBook>
//     </div>
//   );
// }

// export default MushafFlip;
import React from "react";
import HTMLFlipBook from "react-pageflip";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useSearchParams } from "react-router-dom";

function MushafFlip() {
  const totalPages = 604;
  const [params] = useSearchParams();
  const goToPage = Number(params.get("page")) || 1;

  const bookRef = React.useRef();

  React.useEffect(() => {
    if (bookRef.current) {
      setTimeout(() => {
        bookRef.current.pageFlip().turnToPage(goToPage - 1);
      }, 300);
    }
  }, [goToPage]);

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">

      <HTMLFlipBook
        ref={bookRef}
        width={window.innerWidth}
        height={window.innerHeight}
        size="stretch"
        showCover={false}
        mobileScrollSupport={true}
        direction="rtl"
        minWidth={300}
        maxWidth={4000}
        minHeight={300}
        maxHeight={4000}
      >
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            className="h-full w-full flex justify-center items-center bg-black"
          >
            <TransformWrapper minScale={1} maxScale={3}>
              <TransformComponent>
                <img
                  src={`/mushaf/${i + 1}.jpg`}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain"
                  }}
                />
              </TransformComponent>
            </TransformWrapper>
          </div>
        ))}
      </HTMLFlipBook>

    </div>
  );
}

export default MushafFlip;
