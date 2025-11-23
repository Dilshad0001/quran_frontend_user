
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
    <div className=" w-full h-full object-cover    bg-white flex justify-center items-center">

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
          // <div
          //   key={i}
          //   // className="h-100 w-full py-30 flex justify-center items-center bg-yellow-700"
          //   className="w-full h-full flex justify-center items-center bg-yellow-700"
          // >
          <div
  key={i}
  className="w-full h-full flex justify-center py-30 items-center"
  style={{ height: "100%" }}
>

            <TransformWrapper minScale={1} maxScale={3}>
              <TransformComponent>
                <img
                  src={`/mushaf/${i + 1}.jpg`}
                  // style={{
                  //   maxHeight: "100vh",
                  //   maxWidth: "100%",
                  //   objectFit: "fill"
                  // }}
                  className="w-full h-full object-cover"
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
