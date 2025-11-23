import React from "react";
import MushafViewer from "../components/mushaf/MushafViewer";
import { useParams } from "react-router-dom";

export default function MushafSVGPage() {
  const { page } = useParams(); 
  return (
    <div className="w-full min-h-screen bg-gray-200">
      {/* <h2 className="text-center text-xl font-semibold py-2 px-1">
        Quran Mushaf (SVG)
      </h2> */}

      <div className="w-full overflow-hidden px-">
        <MushafViewer startPage={Number(page)  || 1} />
      </div>
    </div>
  );
}
