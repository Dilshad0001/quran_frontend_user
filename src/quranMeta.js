// import { quranText } from "quran-meta";
import QuranTest from "./pages/QuranTest";

export default function QuranTest() {
  const ayah = QuranTest[1][1]; // Surah 1, Ayah 1

  return (
    <div>
      <h1>{ayah}</h1>
    </div>
  );
}
