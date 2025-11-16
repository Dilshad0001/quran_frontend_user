const fs = require("fs");
const https = require("https");

const outputDir = "./public/mushaf/";
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// WORKING SOURCE (tested)
function getUrl(page) {
  return `https://quran.ksu.edu.sa/png_big/${page}.png`;
}

function download(page) {
  const url = getUrl(page);
  const filePath = `${outputDir}${page}.png`;

  https.get(url, (res) => {
    if (res.statusCode !== 200) {
      console.log(`❌ Failed page ${page}`);
      return;
    }

    const fileStream = fs.createWriteStream(filePath);
    res.pipe(fileStream);

    fileStream.on("finish", () => {
      fileStream.close();
      console.log(`✔ Downloaded page ${page}`);
    });
  });
}

// Download 1 → 604
for (let page = 1; page <= 604; page++) {
  download(page);
}
