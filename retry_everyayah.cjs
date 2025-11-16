const fs = require("fs");
const https = require("https");

const outputDir = "./public/mushaf/";
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// ONLY missing pages (failed ones)
const failed = [
431,513,405,347,542,378,451,449,399,414,357,570,416,489,385,532,192,604,413,479,
342,379,482,446,389,441,468,425,524,546,557,458,518,494,469,511,415,552,544,569,
523,312,497,408,369,436,440,577,459,531,480,351,516,493,221,438,545,558,563,476,
584,580,598,554,539,601,599,572,136,499,444,507,470,268,519,592,597,571,583,565,
538,521,581,588,541,560,529,526,553,564,481,392,585,575,591,533,576,566,549,550,
447,574,593
];

function download(page) {
  const url = `https://everyayah.com/data/images_png/${page.toString().padStart(3,"0")}.png`;
  const filePath = `${outputDir}${page}.png`;

  https.get(url, (res) => {
    if (res.statusCode !== 200) {
      console.log(`❌ Still missing: ${page}`);
      return;
    }

    const file = fs.createWriteStream(filePath);
    res.pipe(file);

    file.on("finish", () => {
      file.close();
      console.log(`✔ FIXED (mirror): ${page}`);
    });
  });
}

failed.forEach(download);
