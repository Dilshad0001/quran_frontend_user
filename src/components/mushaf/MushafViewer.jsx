
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
        className="mushaf-svg w-full h-screen overflow-hidden fixed top-0 left-0 touch-none"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
}
