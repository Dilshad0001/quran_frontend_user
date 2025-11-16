import React from "react";
import HTMLFlipBook from "react-pageflip";
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
        width={400}
        height={600}
        showCover={false}
        mobileScrollSupport={true}
        className="shadow-xl"
        direction="rtl"
        useMouseEvents={true}
        clickToFlip={true}
        disableFlipByClick={false}
        swipeDistance={10}
        flippingTime={400}
        maxShadowOpacity={0.3}
        autoSize={true}
      >
        {Array.from({ length: totalPages }).map((_, i) => (
          <div key={i} className="bg-white flex justify-center">
            <img
              src={`/mushaf/${i + 1}.jpg`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default MushafFlip;
