import React from "react";

function AyatContent({ ayats, view, toArabicNumber }) {
  return (
    <div>
      {/* Default Arabic View */}
      {!view && (
        <div
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          dir="rtl"
          style={{
            fontFamily: "Amiri, serif",
            whiteSpace: "normal",
            lineHeight: "3.5rem",
          }}
        >
          {ayats.map((ayat) => (
            <span key={ayat.id} className="text-3xl text-gray-800">
              {ayat.ayat_text}{" "}
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 text-base mx-1">
                {toArabicNumber(ayat.ayat_number)}
              </span>{" "}
            </span>
          ))}
        </div>
      )}

      {/* Meaning / Tafseer View */}
      {view &&
        ayats.map((ayat) => (
          <div
            key={ayat.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4 overflow-hidden"
          >
            {ayat.fractions?.map((f) => (
              <div key={f.id} className="border-b border-gray-100 last:border-b-0">
                {/* Arabic */}
                <div className="bg-gray-50 p-4">
                  <p
                    className="text-2xl text-right text-gray-800 leading-relaxed"
                    dir="rtl"
                    style={{ fontFamily: "Amiri, serif" }}
                  >
                    {f.ayat_fraction_text}
                  </p>
                </div>

                <div className="p-4 space-y-3">
                  {/* Meaning */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1 h-4 bg-emerald-500 rounded"></div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Meaning
                      </span>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {f.ayat_fraction_meaning}
                    </p>
                  </div>

                  {/* Tafseer */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1 h-4 bg-blue-500 rounded"></div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        തഫ്സീർ
                      </span>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {f.ayat_fraction_tafseer}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Full Ayat */}
            <div className="bg-gray-50 p-4 border-t-2 border-emerald-100">
              <p
                className="text-3xl text-right text-gray-800 mb-3 leading-relaxed"
                dir="rtl"
                style={{ fontFamily: "Amiri, serif" }}
              >
                {ayat.ayat_text}{" "}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white text-base mx-1">
                  {toArabicNumber(ayat.ayat_number)}
                </span>
              </p>

              <div className="bg-white rounded-lg p-3 mb-2 border border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {ayat.meaning_text}
                </p>
              </div>

              {view === "meaning" && (
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <p className="text-xs font-semibold text-blue-700 mb-1">
                    വാക്കുകളുടെ അർത്ഥം
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {ayat.word_meaning}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

export default AyatContent;
