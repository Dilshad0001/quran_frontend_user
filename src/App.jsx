// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SurahListPage from './pages/SurahListPage';
// // import SuratList from './component/SuratList';
// // import SuratList from './component/SuratList'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     {/* <SuratList/> */}
//     <Route path="/" element={<SurahListPage />} />

//     </>
//   )
// }

// export default App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SurahListPage from "./pages/SurahListPage";
import SurahDetailPage from "./pages/SurahDetailPage";
// import SurahDetailPage from "./pages/SurahDetailPage";
// import SurahDetailPage from "./pages/SurahDetailPage";
// import SurahDetailPage from "./pages/SurahDetailPage";
import InstallButton from "./components/InstallButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SurahListPage />} />
        <Route path="/surah/:id" element={<SurahDetailPage />} />
        {/* Later we can add more routes like: */}
        {/* <Route path="/surah/:id" element={<SurahDetailPage />} /> */}
      </Routes>
      <InstallButton /> 
    </Router>
  );
}

export default App;
