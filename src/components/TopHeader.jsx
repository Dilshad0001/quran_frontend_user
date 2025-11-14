import React from "react";
import { ArrowLeft, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TopHeader({ title, onShare }) {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="text-gray-700" size={22} />
        </button>

        <h1
          className="text-lg font-semibold text-gray-800"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          {title}
        </h1>

        <button
          onClick={onShare}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Share2 className="text-gray-700" size={22} />
        </button>
      </div>
    </div>
  );
}

export default TopHeader;
