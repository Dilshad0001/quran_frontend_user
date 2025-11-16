// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// function MushafPage() {
//   const { page } = useParams();
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-black">
//       <button
//         onClick={() => navigate(-1)}
//         className="text-white p-4 text-xl"
//       >
//         ⬅ Back
//       </button>

//       <img
//         src={`/mushaf/${page}.jpg`}
//         alt={`Page ${page}`}
//         className="w-full"
//       />
//     </div>
//   );
// }

// export default MushafPage;
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function MushafPage() {
  const { page } = useParams();
  const navigate = useNavigate();
  const currentPage = parseInt(page);

  const totalPages = 604; // total mushaf pages

  // Swipe detection
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchEndX - touchStartX;

    if (diff > 50) {
      // swipe right = NEXT PAGE
      if (currentPage < totalPages) navigate(`/mushaf/${currentPage + 1}`);
    } 
    else if (diff < -50) {
      // swipe left = PREVIOUS PAGE
      if (currentPage > 1) navigate(`/mushaf/${currentPage - 1}`);
    }
  };

  return (
    <div
      className="min-h-screen bg-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={`/mushaf/${currentPage}.jpg`}
        alt={`Page ${page}`}
        className="w-full"
      />
    </div>
  );
}

export default MushafPage;
