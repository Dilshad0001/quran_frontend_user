import React from "react";
import HTMLFlipBook from "react-pageflip";
import { useParams } from "react-router-dom";

function MushafPageFlip() {
  const totalPages = 604;

  return (
    <div className="min-h-screen bg-black flex justify-center py-4">
      <HTMLFlipBook
        width={400}
        height={600}
        size="stretch"
        minWidth={300}
        maxWidth={600}
        minHeight={400}
        maxHeight={900}
        showCover={false}
        mobileScrollSupport={true}
        className="shadow-xl rounded"
      >
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <div key={page} className="bg-white">
              <img
                src={`/mushaf/${page}.jpg`}
                // className="w-full h-full object-contain"
                  style={{
    height: "100%",
    width: "100%",
    objectFit: "contain"
  }}
              />
            </div>
          );
        })}
      </HTMLFlipBook>
    </div>
  );
}

export default MushafPageFlip;
