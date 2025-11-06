// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // // import { surahs } from "../data/surahData";
// // import { surahs } from "../data/surahData";



// // function SurahListPage() {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white p-4">
// //       <h1 className="text-3xl font-bold text-center text-amber-900 mb-6">
// //         📖 ഖുർആൻ സൂറത്ത് ലിസ്റ്റ്
// //       </h1>

// //       <div className="space-y-3 max-w-md mx-auto">
// //         {surahs.map((surah) => (
// //           <div
// //             key={surah.id}
// //             onClick={() => navigate(`/surah/${surah.id}`)}
// //             className="bg-white p-4 rounded-2xl shadow-md border border-amber-100 hover:shadow-lg cursor-pointer transition"
// //           >
// //             <div className="flex justify-between items-center">
// //               <div className="text-lg font-bold text-amber-800">
// //                 {surah.id}. {surah.malayalam}
// //               </div>
// //               <div
// //                 className="text-2xl text-amber-900"
// //                 style={{ fontFamily: "Amiri, serif" }}
// //               >
// //                 {surah.arabic}
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default SurahListPage;


// import React, { useState, useEffect } from "react";
// import { Search } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const surahs = [
//   { id: 1, arabic: "الفاتحة", malayalam: "അല്‍ ഫാതിഹ", english: "Al-Fatihah", totalAyats: 7 },
//   { id: 2, arabic: "البقرة", malayalam: "അല്‍ ബഖറ", english: "Al-Baqarah", totalAyats: 286 },
//   { id: 3, arabic: "آل عمران", malayalam: "ആലു ഇംറാൻ", english: "Ali Imran", totalAyats: 200 },
//   { id: 4, arabic: "النساء", malayalam: "അൻ നിസാഅ്", english: "An-Nisa", totalAyats: 176 },
//   { id: 5, arabic: "المائدة", malayalam: "അല്‍ മാഇദ", english: "Al-Maidah", totalAyats: 120 },
//   { id: 6, arabic: "الأنعام", malayalam: "അല്‍ അൻആം", english: "Al-Anam", totalAyats: 165 },
//   { id: 7, arabic: "الأعراف", malayalam: "അല്‍ അഅ്‌റാഫ്", english: "Al-Araf", totalAyats: 206 },
//   { id: 8, arabic: "الأنفال", malayalam: "അല്‍ അൻഫാൽ", english: "Al-Anfal", totalAyats: 75 },
// ];

// function SurahListPage() {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredSurahs, setFilteredSurahs] = useState(surahs);

//   useEffect(() => {
//     const filtered = surahs.filter((surah) => {
//       const query = searchQuery.toLowerCase();
//       return (
//         surah.arabic.includes(searchQuery) ||
//         surah.malayalam.includes(searchQuery) ||
//         surah.english.toLowerCase().includes(query) ||
//         surah.id.toString().includes(query)
//       );
//     });
//     setFilteredSurahs(filtered);
//   }, [searchQuery]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
//       <div className="max-w-2xl mx-auto px-4 py-6">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-amber-900 mb-2">القرآن الكريم</h1>
//           <p className="text-amber-700">പരിശുദ്ധ ഖുർആൻ</p>
//         </div>

//         {/* Search Bar */}
//         <div className="relative mb-6">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600" size={20} />
//           <input
//             type="text"
//             placeholder="സൂറത്ത് തിരയുക..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-amber-200 focus:border-amber-400 focus:outline-none bg-white shadow-sm transition-all"
//           />
//         </div>

//         {/* Surah List */}
//         <div className="space-y-3">
//           {filteredSurahs.map((surah) => (
//             <div
//               key={surah.id}
//               onClick={() => navigate(`/surah/${surah.id}`)}
//               className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-amber-100"
//             >
//               <div className="flex items-center justify-between">
//                 {/* Surah Number */}
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold shadow-md">
//                   {surah.id}
//                 </div>

//                 {/* Surah Names */}
//                 <div className="flex-1 text-right mr-4">
//                   <h2 className="text-2xl font-bold text-amber-900 mb-1" style={{ fontFamily: "Amiri, serif" }}>
//                     {surah.arabic}
//                   </h2>
//                   <p className="text-sm text-amber-700">{surah.malayalam}</p>
//                   <p className="text-xs text-amber-500 mt-1">{surah.totalAyats} ആയത്തുകൾ</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SurahListPage;
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import { getSurahs } from "../data/surahApi"; // ✅ import the API call
import { getSurahs } from "../data/surahApi";
function SurahListPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [surahs, setSurahs] = useState([]); // start empty
  const [filteredSurahs, setFilteredSurahs] = useState([]);

  // ✅ Load Surahs from backend on mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await getSurahs();
      setSurahs(data);
      setFilteredSurahs(data);
    };
    fetchData();
  }, []);

  // ✅ Handle search filter
  useEffect(() => {
    const filtered = surahs.filter((surah) => {
      const query = searchQuery.toLowerCase();
      return (
        surah.arabic.includes(searchQuery) ||
        surah.malayalam?.includes(searchQuery) ||
        surah.english?.toLowerCase().includes(query) ||
        surah.id.toString().includes(query)
      );
    });
    setFilteredSurahs(filtered);
  }, [searchQuery, surahs]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-900 mb-2">القرآن الكريم</h1>
          <p className="text-amber-700">പരിശുദ്ധ ഖുർആൻ</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600" size={20} />
          <input
            type="text"
            placeholder="സൂറത്ത് തിരയുക..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-amber-200 focus:border-amber-400 focus:outline-none bg-white shadow-sm transition-all"
          />
        </div>

        {/* Surah List */}
        <div className="space-y-3">
          {filteredSurahs.map((surah) => (
            <div
              key={surah.id}
              onClick={() => navigate(`/surah/${surah.id}`)}
              className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-amber-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold shadow-md">
                  {surah.id}
                </div>
                <div className="flex-1 text-right mr-4">
                  <h2 className="text-2xl font-bold text-amber-900 mb-1" style={{ fontFamily: "Amiri, serif" }}>
                    {surah.arabic}
                  </h2>
                  <p className="text-sm text-amber-700">{surah.malayalam}</p>
                  <p className="text-xs text-amber-500 mt-1">{surah.totalAyats} ആയത്തുകൾ</p>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {filteredSurahs.length === 0 && (
            <p className="text-center text-amber-700 mt-10">സൂറത്ത് കണ്ടെത്താനായില്ല</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SurahListPage;
