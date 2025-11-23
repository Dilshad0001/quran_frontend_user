// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import SurahListPage from './pages/SurahListPage';
// // // import SuratList from './component/SuratList';
// // // import SuratList from './component/SuratList'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //     {/* <SuratList/> */}
// //     <Route path="/" element={<SurahListPage />} />

// //     </>
// //   )
// // }

// // export default App
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SurahListPage from "./pages/SurahListPage";
// import SurahDetailPage from "./pages/SurahDetailPage";
// // import SurahDetailPage from "./pages/SurahDetailPage";
// // import SurahDetailPage from "./pages/SurahDetailPage";
// // import SurahDetailPage from "./pages/SurahDetailPage";
// import InstallButton from "./components/InstallButton";
// import MushafPage from "./pages/MushafPage";
// import MushafPageFlip from "./pages/MushafPageFlip";
// import MushafFlip from "./pages/MushafFlip";
// import QuranTest from "./pages/QuranTest";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SurahListPage />} />
//         <Route path="/surah/:id" element={<SurahDetailPage />} />
//         {/* Later we can add more routes like: */}
//         {/* <Route path="/surah/:id" element={<SurahDetailPage />} /> */}
//         <Route path="/mushaf/:page" element={<MushafPage />} />
//         {/* <Route path="/mushaf" element={<MushafPageFlip/>} /> */}
//         <Route path="/mushaf" element={<MushafFlip />} />
//         <Route path="/test" element={<QuranTest/>} />
//             <div>
//       {!selectedSurah ? (
//         <SurahList onSelect={(index) => setSelectedSurah(index)} />
//       ) : (
//         <SurahView surahIndex={selectedSurah} onBack={() => setSelectedSurah(null)} />
//       )}
//     </div>



//       </Routes>
//       <InstallButton /> 
//     </Router>
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SurahListPage from "./pages/SurahListPage";
import SurahDetailPage from "./pages/SurahDetailPage";

import InstallButton from "./components/InstallButton";
import MushafPage from "./pages/MushafPage";
import MushafFlip from "./pages/MushafFlip";
// import QuranTest from "./pages/QuranTest";

// Quran components you created earlier
// import SurahList from "./components/quran/SurahList";
import SurahList from "./components/quran/SurahList";
import SurahView from "./components/quran/SurahView";
import MushafSVGPage from "./pages/MushafSVGPage";

function App() {
  // State-based Quran viewer
  const [selectedSurah, setSelectedSurah] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SurahListPage />} />
        <Route path="/surah/:id" element={<SurahDetailPage />} />
        <Route path="/mushaf/:page" element={<MushafPage />} />
        <Route path="/mushaf" element={<MushafFlip />} />
        {/* <Route path="/test" element={<QuranTest />} /> */}
        <Route path="/mushaf-svg" element={<MushafSVGPage />} />

      </Routes>

      {/* ❗ outside Routes — allowed */}
      {/* <div style={{ padding: "10px" }}>
        {!selectedSurah ? (
          <SurahList onSelect={(index) => setSelectedSurah(index)} />
        ) : (
          <SurahView
            surahIndex={selectedSurah}
            onBack={() => setSelectedSurah(null)}
          />
        )}
      </div> */}

      <InstallButton />
    </Router>
  );
}

export default App;
