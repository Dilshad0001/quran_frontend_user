

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getSurahs } from "../data/surahApi";
import { surahStartPage } from "../data/surahPages";
// import { surahStartPage } from "../data/surahPages";

function SurahListPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [surahs, setSurahs] = useState([]);
  const [filteredSurahs, setFilteredSurahs] = useState([]);
  // const navigate=useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSurahs();
      setSurahs(data);
      setFilteredSurahs(data);
    };
    fetchData();
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-2xl mx-auto px-4 py-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className="text-4xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent"
            style={{ fontFamily: "Amiri, serif" }}
          >
            القرآن الكريم
          </h1>
        </div>
        {/* <button className="bg-amber-700" onClick={navigate("/mushaf-svg")}>to page</button> */}

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-600" size={22} />
          <input
            type="text"
            placeholder="സൂറത്ത് തിരയുക..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-12 pr-4 rounded-2xl border-2 border-teal-200 bg-white shadow"
          />
        </div>

        {/* Surah List */}
        <div className="space-y-1">
          {filteredSurahs.map((surah) => (
            <div
              key={surah.id}

              // onClick={() => navigate(`/mushaf-svg/${surahStartPage[surah.number]}`)} 
              onClick={() => navigate(`/mushaf-svg/${surahStartPage[surah.number]}/${surah.number}`)}

              className="h-16 p-6 bg-white cursor-pointer shadow rounded-3xl flex items-center justify-between "
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center">
                  <span className="text-lg">{surah.number}</span>
                </div>
                <p className="text-amber-800 text-sm">{surah.malayalam}</p>
              </div>

              {/* Right */}
              <h2
                className="text-3xl font-bold text-gray-700"
                style={{ fontFamily: "Amiri, serif" }}
              >
                {surah.arabic}
              </h2>
            </div>
          ))}
        </div>

        {filteredSurahs.length === 0 && (
          <p className="text-center text-teal-700 mt-10">സൂറത്ത് കണ്ടെത്താനായില്ല</p>
        )}
      </div>
    </div>
  );
}

export default SurahListPage;
