//#region src/const.ts
const meta = {
	numAyahs: 6236,
	numSurahs: 114,
	numPages: 604,
	numJuzs: 30,
	numHizbs: 60,
	numRubAlHizbs: 240,
	numRubsInJuz: 8,
	numSajdas: 15,
	numRukus: 556,
	numManzils: 7
};
/**
* The maximum number of ayahs (verses) that can exist in any surah (chapter) of the Quran.
* This maximum occurs in Surah Al-Baqarah (2), which has 286 ayahs.
*/
const maxAyahsInSurah = 286;

//#endregion
//#region src/lists/surahList.ts
const SurahListRaw = [
	[
		1,
		7,
		5,
		1,
		"الفاتحة",
		true
	],
	[
		8,
		286,
		87,
		40,
		"البقرة",
		false
	],
	[
		294,
		200,
		89,
		20,
		"آل عمران",
		false
	],
	[
		494,
		176,
		92,
		24,
		"النساء",
		false
	],
	[
		670,
		120,
		112,
		16,
		"المائدة",
		false
	],
	[
		790,
		165,
		55,
		20,
		"الأنعام",
		true
	],
	[
		955,
		206,
		39,
		24,
		"الأعراف",
		true
	],
	[
		1161,
		75,
		88,
		10,
		"الأنفال",
		false
	],
	[
		1236,
		129,
		113,
		16,
		"التوبة",
		false
	],
	[
		1365,
		109,
		51,
		11,
		"يونس",
		true
	],
	[
		1474,
		123,
		52,
		10,
		"هود",
		true
	],
	[
		1597,
		111,
		53,
		12,
		"يوسف",
		true
	],
	[
		1708,
		43,
		96,
		6,
		"الرعد",
		false
	],
	[
		1751,
		52,
		72,
		7,
		"ابراهيم",
		true
	],
	[
		1803,
		99,
		54,
		6,
		"الحجر",
		true
	],
	[
		1902,
		128,
		70,
		16,
		"النحل",
		true
	],
	[
		2030,
		111,
		50,
		12,
		"الإسراء",
		true
	],
	[
		2141,
		110,
		69,
		12,
		"الكهف",
		true
	],
	[
		2251,
		98,
		44,
		6,
		"مريم",
		true
	],
	[
		2349,
		135,
		45,
		8,
		"طه",
		true
	],
	[
		2484,
		112,
		73,
		7,
		"الأنبياء",
		true
	],
	[
		2596,
		78,
		103,
		10,
		"الحج",
		false
	],
	[
		2674,
		118,
		74,
		6,
		"المؤمنون",
		true
	],
	[
		2792,
		64,
		102,
		9,
		"النور",
		false
	],
	[
		2856,
		77,
		42,
		6,
		"الفرقان",
		true
	],
	[
		2933,
		227,
		47,
		11,
		"الشعراء",
		true
	],
	[
		3160,
		93,
		48,
		7,
		"النمل",
		true
	],
	[
		3253,
		88,
		49,
		8,
		"القصص",
		true
	],
	[
		3341,
		69,
		85,
		7,
		"العنكبوت",
		true
	],
	[
		3410,
		60,
		84,
		6,
		"الروم",
		true
	],
	[
		3470,
		34,
		57,
		3,
		"لقمان",
		true
	],
	[
		3504,
		30,
		75,
		3,
		"السجدة",
		true
	],
	[
		3534,
		73,
		90,
		9,
		"الأحزاب",
		false
	],
	[
		3607,
		54,
		58,
		6,
		"سبإ",
		true
	],
	[
		3661,
		45,
		43,
		5,
		"فاطر",
		true
	],
	[
		3706,
		83,
		41,
		5,
		"يس",
		true
	],
	[
		3789,
		182,
		56,
		5,
		"الصافات",
		true
	],
	[
		3971,
		88,
		38,
		5,
		"ص",
		true
	],
	[
		4059,
		75,
		59,
		8,
		"الزمر",
		true
	],
	[
		4134,
		85,
		60,
		9,
		"غافر",
		true
	],
	[
		4219,
		54,
		61,
		6,
		"فصلت",
		true
	],
	[
		4273,
		53,
		62,
		5,
		"الشورى",
		true
	],
	[
		4326,
		89,
		63,
		7,
		"الزخرف",
		true
	],
	[
		4415,
		59,
		64,
		3,
		"الدخان",
		true
	],
	[
		4474,
		37,
		65,
		4,
		"الجاثية",
		true
	],
	[
		4511,
		35,
		66,
		4,
		"الأحقاف",
		true
	],
	[
		4546,
		38,
		95,
		4,
		"محمد",
		false
	],
	[
		4584,
		29,
		111,
		4,
		"الفتح",
		false
	],
	[
		4613,
		18,
		106,
		2,
		"الحجرات",
		false
	],
	[
		4631,
		45,
		34,
		3,
		"ق",
		true
	],
	[
		4676,
		60,
		67,
		3,
		"الذاريات",
		true
	],
	[
		4736,
		49,
		76,
		2,
		"الطور",
		true
	],
	[
		4785,
		62,
		23,
		3,
		"النجم",
		true
	],
	[
		4847,
		55,
		37,
		3,
		"القمر",
		true
	],
	[
		4902,
		78,
		97,
		3,
		"الرحمن",
		false
	],
	[
		4980,
		96,
		46,
		3,
		"الواقعة",
		true
	],
	[
		5076,
		29,
		94,
		4,
		"الحديد",
		false
	],
	[
		5105,
		22,
		105,
		3,
		"المجادلة",
		false
	],
	[
		5127,
		24,
		101,
		3,
		"الحشر",
		false
	],
	[
		5151,
		13,
		91,
		2,
		"الممتحنة",
		false
	],
	[
		5164,
		14,
		109,
		2,
		"الصف",
		false
	],
	[
		5178,
		11,
		110,
		2,
		"الجمعة",
		false
	],
	[
		5189,
		11,
		104,
		2,
		"المنافقون",
		false
	],
	[
		5200,
		18,
		108,
		2,
		"التغابن",
		false
	],
	[
		5218,
		12,
		99,
		2,
		"الطلاق",
		false
	],
	[
		5230,
		12,
		107,
		2,
		"التحريم",
		false
	],
	[
		5242,
		30,
		77,
		2,
		"الملك",
		true
	],
	[
		5272,
		52,
		2,
		2,
		"القلم",
		true
	],
	[
		5324,
		52,
		78,
		2,
		"الحاقة",
		true
	],
	[
		5376,
		44,
		79,
		2,
		"المعارج",
		true
	],
	[
		5420,
		28,
		71,
		2,
		"نوح",
		true
	],
	[
		5448,
		28,
		40,
		2,
		"الجن",
		true
	],
	[
		5476,
		20,
		3,
		2,
		"المزمل",
		true
	],
	[
		5496,
		56,
		4,
		2,
		"المدثر",
		true
	],
	[
		5552,
		40,
		31,
		2,
		"القيامة",
		true
	],
	[
		5592,
		31,
		98,
		2,
		"الانسان",
		false
	],
	[
		5623,
		50,
		33,
		2,
		"المرسلات",
		true
	],
	[
		5673,
		40,
		80,
		2,
		"النبإ",
		true
	],
	[
		5713,
		46,
		81,
		2,
		"النازعات",
		true
	],
	[
		5759,
		42,
		24,
		1,
		"عبس",
		true
	],
	[
		5801,
		29,
		7,
		1,
		"التكوير",
		true
	],
	[
		5830,
		19,
		82,
		1,
		"الإنفطار",
		true
	],
	[
		5849,
		36,
		86,
		1,
		"المطففين",
		true
	],
	[
		5885,
		25,
		83,
		1,
		"الإنشقاق",
		true
	],
	[
		5910,
		22,
		27,
		1,
		"البروج",
		true
	],
	[
		5932,
		17,
		36,
		1,
		"الطارق",
		true
	],
	[
		5949,
		19,
		8,
		1,
		"الأعلى",
		true
	],
	[
		5968,
		26,
		68,
		1,
		"الغاشية",
		true
	],
	[
		5994,
		30,
		10,
		1,
		"الفجر",
		true
	],
	[
		6024,
		20,
		35,
		1,
		"البلد",
		true
	],
	[
		6044,
		15,
		26,
		1,
		"الشمس",
		true
	],
	[
		6059,
		21,
		9,
		1,
		"الليل",
		true
	],
	[
		6080,
		11,
		11,
		1,
		"الضحى",
		true
	],
	[
		6091,
		8,
		12,
		1,
		"الشرح",
		true
	],
	[
		6099,
		8,
		28,
		1,
		"التين",
		true
	],
	[
		6107,
		19,
		1,
		1,
		"العلق",
		true
	],
	[
		6126,
		5,
		25,
		1,
		"القدر",
		true
	],
	[
		6131,
		8,
		100,
		1,
		"البينة",
		false
	],
	[
		6139,
		8,
		93,
		1,
		"الزلزلة",
		false
	],
	[
		6147,
		11,
		14,
		1,
		"العاديات",
		true
	],
	[
		6158,
		11,
		30,
		1,
		"القارعة",
		true
	],
	[
		6169,
		8,
		16,
		1,
		"التكاثر",
		true
	],
	[
		6177,
		3,
		13,
		1,
		"العصر",
		true
	],
	[
		6180,
		9,
		32,
		1,
		"الهمزة",
		true
	],
	[
		6189,
		5,
		19,
		1,
		"الفيل",
		true
	],
	[
		6194,
		4,
		29,
		1,
		"قريش",
		true
	],
	[
		6198,
		7,
		17,
		1,
		"الماعون",
		true
	],
	[
		6205,
		3,
		15,
		1,
		"الكوثر",
		true
	],
	[
		6208,
		6,
		18,
		1,
		"الكافرون",
		true
	],
	[
		6214,
		3,
		114,
		1,
		"النصر",
		false
	],
	[
		6217,
		5,
		6,
		1,
		"المسد",
		true
	],
	[
		6222,
		4,
		22,
		1,
		"الإخلاص",
		true
	],
	[
		6226,
		5,
		20,
		1,
		"الفلق",
		true
	],
	[
		6231,
		6,
		21,
		1,
		"الناس",
		true
	]
];
const SurahList = [
	[
		-1,
		1,
		1,
		1,
		"",
		false
	],
	...SurahListRaw,
	[
		6237,
		1,
		1,
		1,
		"",
		false
	]
];

//#endregion
//#region src/validation.ts
/**
* Validates if the provided value is a valid Surah number.
*
* @param surah - The value to validate, can be a Surah object, number, or unknown type
* @throws TypeError When the provided value is not an integer
* @throws RangeError When the provided surah number is outside the valid range (1 to total number of surahs)
* @remarks This is a type assertion function that ensures the input is a valid Surah
*/
function checkValidSurah(surah) {
	if (typeof surah !== "number" || !Number.isInteger(surah)) throw new TypeError("Ayah ID must be an integer");
	if (!isValidSurah(surah)) throw new RangeError("Surah must be between 1 and " + meta.numSurahs);
}
/**
* Validates if the given surah and ayah numbers form a valid combination.
* @param surah - The surah number or Surah object to validate
* @param ayah - The ayah number or AyahNo object to validate
* @throws Error If the surah-ayah combination is invalid
*/
function checkValidSurahAyah(surah, ayah) {
	checkValidSurahAyahPair([surah, ayah]);
}
/**
* Validates that a surah-ayah pair contains valid values
* @param surahAyah - A tuple containing surah number/object and ayah number
* @throws RangeError If ayah number is not between 1 and the maximum ayah count for the given surah
* @throws If surah is invalid (from checkValidSurah)
* @example
* ```ts
* checkValidSurahAyahPair([1, 7]) // Valid
* checkValidSurahAyahPair([1, 8]) // Throws RangeError
* ```
*/
function checkValidSurahAyahPair(surahAyah) {
	const [surah, ayah] = surahAyah;
	checkValidSurah(surah);
	if (typeof ayah !== "number" || !Number.isInteger(ayah) || ayah < 1 || ayah > getAyahCountInSurah(surah)) throw new RangeError("Ayah must be between 1 and " + getAyahCountInSurah(surah));
}
/**
* Validates and asserts that the given value is a valid Ayah ID.
* An Ayah ID must be an integer between 1 and the total number of Ayahs.
*
* @param ayahId - The value to check as an Ayah ID
* @throws TypeError If the value is not an integer
* @throws RangeError If the value is not within valid Ayah ID range
*/
function checkValidAyahId(ayahId) {
	if (typeof ayahId !== "number" || !Number.isInteger(ayahId)) throw new TypeError("Ayah ID must be an integer");
	if (!isValidAyahId(ayahId)) throw new RangeError("Ayah ID must be between 1 and " + meta.numAyahs);
}
/**
* Checks if a value is a valid Page number.
* @param x - The value to check
* @throws {@link TypeError} When the value is not an integer
* @throws {@link RangeError} When the value is not within valid page range (1 to numPages)
* @remarks This is a type assertion function that ensures a value is a valid Page number
*/
function checkValidPage(x) {
	if (typeof x !== "number" || !Number.isInteger(x)) throw new TypeError("Page must be an integer");
	if (!isValidPage(x)) throw new RangeError("Page must be between 1 and " + meta.numPages);
}
/**
* Type guard that checks if a value is a valid Juz number.
* Throws TypeError if value is not an integer.
* Throws RangeError if value is outside valid Juz range.
*
* @param x - Value to check
* @throws {@link TypeError} If value is not an integer
* @throws {@link RangeError} If value is not between 1 and the total number of Juz
*/
function checkValidJuz(x) {
	if (typeof x !== "number" || !Number.isInteger(x)) throw new TypeError("Juz must be an integer");
	if (!isValidJuz(x)) throw new RangeError("Juz must be between 1 and " + meta.numJuzs);
}
/**
* Type guard that checks if a value is a valid Ruku number.
* @param x - The value to check
* @throws {@link TypeError} If the value is not an integer number
* @throws {@link RangeError} If the number is not within valid Ruku range
* @example
* ```ts
* checkValidRuku(5); // OK
* checkValidRuku("5"); // Throws TypeError
* checkValidRuku(999); // Throws RangeError
* ```
*/
function checkValidRuku(x) {
	if (typeof x !== "number" || !Number.isInteger(x)) throw new TypeError("Ruku must be an integer");
	if (!isValidRuku(x)) throw new RangeError("Ruku must be between 1 and " + meta.numRukus);
}
/**
* Type guard that checks if a value is a valid Manzil number.
* @param x - The value to check
* @throws {@link TypeError} If the value is not an integer
* @throws {@link RangeError} If the value is not within valid Manzil range (1 to max manzils)
* @remarks This is an assertion function that ensures the input is a valid Manzil type
*/
function checkValidManzil(x) {
	if (typeof x !== "number" || !Number.isInteger(x)) throw new TypeError("Manzil must be an integer");
	if (!isValidManzil(x)) throw new RangeError("Manzil must be between 1 and " + meta.numManzils);
}

//#endregion
//#region src/getSurahInfo.ts
/**

* Gets the metadata for the specified Surah.

*

* @param surah - The Surah to get the metadata for.

* @returns The metadata for the specified Surah.

*/
function getSurahInfo(surah) {
	checkValidSurah(surah);
	return SurahList[surah];
}

//#endregion
//#region src/getAyahCountInSurah.ts
/**
* Get the number of ayahs (verses) in the specified surah.
* @param surah - The surah number.
* @returns The number of ayahs in the specified surah.
*/
function getAyahCountInSurah(surah) {
	return getSurahInfo(surah)[1];
}

//#endregion
//#region src/typeGuards.ts
/**

* Checks if the given value is a valid AyahId.

*

* @param x - The value to check.

* @returns True if the value is a valid AyahId, otherwise false.

*/
function isValidAyahId(x) {
	return Number.isInteger(x) && 1 <= x && x <= meta.numAyahs;
}
/**

* Checks if the given value is a valid Ayah number.

*

* @param x - The value to check.

* @returns True if the value is a valid Ayah number, otherwise false.

*/
function isValidAyahNo(x) {
	return Number.isInteger(x) && 1 <= x && x <= maxAyahsInSurah;
}
/**

* Checks if the given value is a valid Surah number.

*

* @param x - The value to check.

* @returns `true` if the value is a valid Surah number, otherwise `false`.

*/
function isValidSurah(x) {
	return Number.isInteger(x) && 1 <= x && x <= meta.numSurahs;
}
/**

* Type guard function that checks if a tuple of two numbers represents a valid Surah and Ayah combination.

*

* @param x - A tuple containing [surahNumber, ayahNumber]

* @returns True if the tuple represents a valid Surah-Ayah combination, false otherwise

*

* @example

* ```ts

* isValidSurahAyah([1, 7]) // true - Al-Fatiha has 7 ayahs

* isValidSurahAyah([1, 8]) // false - Al-Fatiha only has 7 ayahs

* isValidSurahAyah([115, 1]) // false - there are only 114 surahs

* ```

*/
function isValidSurahAyah(x) {
	const [surah, ayah] = x;
	if (!isValidSurah(surah)) return false;
	return Number.isInteger(ayah) && ayah >= 1 && ayah <= getAyahCountInSurah(surah);
}
/**

* Type guard that checks if a number is a valid Juz number

* @param x - The number to check

* @returns True if the number is an integer between 1 and the total number of Juzs (inclusive)

*/
function isValidJuz(x) {
	return Number.isInteger(x) && 1 <= x && x <= meta.numJuzs;
}
/**

* Type guard to check if a number is a valid Quran page number

* @param x - The number to check

* @returns True if the number is an integer between 1 and the total number of pages (inclusive)

*/
function isValidPage(x) {
	return Number.isInteger(x) && 1 <= x && x <= meta.numPages;
}
/**

* Type guard that checks if a value is a valid Ruku number

* @param x - The value to check

* @returns True if x is an integer between 1 and the total number of Rukus

* @example

* ```ts

* if (isValidRuku(5)) {

*   // 5 is a valid Ruku number

* }

* ```

*/
function isValidRuku(x) {
	return Number.isInteger(x) && 1 <= x && x <= meta.numRukus;
}
/**

* Type guard to check if a value is a valid Manzil number

*

* @param x - The value to check

* @returns True if the value is an integer between 1 and the total number of Manzils

*

* @example

* ```ts

* if (isValidManzil(3)) {

*   // value is a valid Manzil number

* }

* ```

*/
function isValidManzil(x) {
	return Number.isInteger(x) && 1 <= x && x <= meta.numManzils;
}

//#endregion
//#region src/ayahStringSplitter.ts
/**
* Splits a string representation of Quran reference into surah and ayah components
* @param str - The string to parse, expected format: "surah:ayah" or "surah:ayahStart-ayahEnd"
* @param isStrict - If true, enforces strict format checking. Defaults to true. If false, allows for additional characters in the string
* @returns A tuple containing surah number and either a single ayah number or a range [start, end]
* @throws {@link Error} If the string format is invalid
* @throws {@link Error} If surah number is invalid
* @throws {@link Error} If ayah number(s) are invalid
* @throws {@link sError} If ayah range is invalid (start should be less than end)
* @example
* ```ts
* ayahStringSplitter("2:255") // returns [2, 255]
* ayahStringSplitter("1:1-7") // returns [1, [1, 7]]
* ```
*/
function ayahStringSplitter(str, isStrict = true) {
	const result = isStrict ? string2NumberSplitterStrict(str) : string2NumberSplitter(str);
	if (!result) throw new Error("Invalid string format: " + str);
	const { surahOrAyah: surahX, ayah, ayahTo } = result;
	if (!isValidSurah(surahX)) throw new Error("Invalid ayah number: " + str);
	const surah = surahX;
	let ayahs;
	if (ayahTo) {
		checkValidAyahId(ayah);
		checkValidAyahId(ayahTo);
		if (ayah > ayahTo) throw new Error("Invalid ayah range: " + str);
		ayahs = [ayah, ayahTo];
	} else {
		if (!isValidAyahNo(ayah)) throw new Error("Error in data " + str);
		checkValidSurahAyah(surah, ayah);
		ayahs = ayah;
	}
	return [surah, ayahs];
}
/**
* Splits a string containing surah and ayah numbers into their numeric components.
*
* @param str - Input string containing numbers separated by non-digits (e.g., "2:255" or "2 255" or "2-255")
* @returns An object containing the parsed numbers, or null if parsing fails
*          - ayah: The ayah number if present
*          - ayahTo: The ending ayah number if a range is specified
*          - surahOrAyah: The surah number
* @example
* stringNumberSplitter("2:255") // returns { ayah: 255, ayahTo: 0, surahOrAyah: 2 }
* stringNumberSplitter("2:255-260") // returns { ayah: 255, ayahTo: 260, surahOrAyah: 2 }
* stringNumberSplitter("invalid") // returns null
*/
function string2NumberSplitter(str) {
	const sr = /(?<surah>\d{1,3})\D*(?<ayah>\d{0,3})\D*(?<ayahTo>\d{0,3})/.exec(str);
	if (sr?.groups && +sr.groups.surah > 0) {
		const { ayah, ayahTo, surah } = sr.groups;
		return {
			surahOrAyah: +surah,
			ayah: +ayah,
			ayahTo: +ayahTo
		};
	}
	return null;
}
/**
* Splits a string in the format "surah:ayah" or "surah:ayah-ayah" into its numeric components.
*
* @param str - The input string to parse in the format "surah:ayah" or "surah:ayah-ayah"
* @returns An object containing the parsed numbers:
*          - surahOrAyah: The surah number
*          - ayah: The first or only ayah number
*          - ayahTo: The ending ayah number (if range specified)
* @throws {@link Error} When the input string format is invalid or contains non-numeric values
*
* @example
* string2NumberSplitterStrict("2:255")    // returns { surahOrAyah: 2, ayah: 255, ayahTo: NaN }
* string2NumberSplitterStrict("2:255-260") // returns { surahOrAyah: 2, ayah: 255, ayahTo: 260 }
*/
function string2NumberSplitterStrict(str) {
	let [surahStr, ayahsStr] = str.trim().split(":");
	surahStr = surahStr.trim();
	const surahX = parseInt(surahStr.trim(), 10);
	if (isNaN(surahX)) throw new Error("Error in surah format " + str);
	ayahsStr = ayahsStr.trim();
	if (!ayahsStr) throw new Error("Error in data " + str);
	let ayahs;
	if (ayahsStr.includes("-")) ayahs = ayahsStr.split("-").map((a) => {
		const ayahX = parseInt(a, 10);
		if (isNaN(ayahX)) throw new Error("Error in surah format " + str);
		return ayahX;
	});
	else {
		const ayahX = parseInt(ayahsStr, 10);
		if (isNaN(ayahX)) throw new Error("Error in surah format " + str);
		ayahs = [ayahX, NaN];
	}
	return {
		surahOrAyah: +surahX,
		ayah: +ayahs[0],
		ayahTo: +ayahs[1]
	};
}

//#endregion
//#region src/surahStringParser.ts
/**

* Parses a string representation of a Surah number and converts it to a valid Surah type

* @param str - The string containing the Surah number to parse

* @returns The parsed Surah number as a Surah type

* @throws {@link Error} If the string cannot be parsed as a number or if the number is not a valid Surah number

*/
function surahStringParser(str, isStrict = false) {
	const surahX = isStrict ? Number(str.trim()) : Number.parseInt(str.trim(), 10);
	if (isNaN(surahX)) throw new Error("Error in surah format " + str);
	if (!isValidSurah(surahX)) throw new Error("Error in surah number " + str);
	return surahX;
}

//#endregion
//#region src/findAyahIdBySurah.ts
/**
* Get the ayah ID for the given surah and ayah number.
* @param surah - The surah number.
* @param ayah - The ayah number within the surah.
* @returns The ayah ID for the given surah and ayah number.
*/
function findAyahIdBySurah(surah, ayah) {
	checkValidSurahAyah(surah, ayah);
	const [startAyahId] = SurahList[surah];
	return startAyahId + ayah - 1;
}

//#endregion
//#region src/lists/juzList.ts
const JuzList = [
	0,
	1,
	149,
	260,
	386,
	517,
	641,
	751,
	900,
	1042,
	1201,
	1328,
	1479,
	1649,
	1803,
	2030,
	2215,
	2484,
	2674,
	2876,
	3215,
	3386,
	3564,
	3733,
	4090,
	4265,
	4511,
	4706,
	5105,
	5242,
	5673,
	6237
];

//#endregion
//#region src/utils.ts
/**
* Performs a binary search on the given array to find the index of the specified element.
*
* @param ar - The array to search.
* @param el - The element to search for.
* @param compare_fn - An optional comparison function to use for the search. Defaults to a simple numeric comparison.
* @returns The index of the element if found, or a negative value indicating the insertion point if not found.
*/
function binarySearch(ar, el, compare_fn = (a, b) => a - b) {
	let m = 0;
	let n = ar.length - 1;
	while (m <= n) {
		const k = n + m >> 1;
		const cmp = compare_fn(el, ar[k]);
		if (cmp > 0) m = k + 1;
		else if (cmp < 0) n = k - 1;
		else return k;
	}
	return -m - 1;
}

//#endregion
//#region src/findJuzByAyahId.ts
/**
* Finds the Juz (part) of the Quran that contains the given Ayah (verse) ID.
*
* @param ayahId - The ID of the Ayah (verse) to find the Juz for.
* @returns The Juz (part) of the Quran that contains the given Ayah ID.
*/
function findJuzByAyahId(ayahId) {
	checkValidAyahId(ayahId);
	const jj = binarySearch(JuzList, ayahId);
	const juz = jj < 0 ? -jj - 2 : jj;
	return juz;
}

//#endregion
//#region src/findJuz.ts
/**
* Finds the Juz (part) of the Quran that the given Ayah (verse) belongs to.
*
* @param surah - The Surah (chapter) number.
* @param ayah - The Ayah (verse) number. Defaults to 1 if not provided.
* @returns The Juz (part) number that the given Ayah belongs to.
*/
function findJuz(surah, ayah = 1) {
	const ayahId = findAyahIdBySurah(surah, ayah);
	return findJuzByAyahId(ayahId);
}

//#endregion
//#region src/findSurahAyahByAyahId.ts
/**
* Finds the Surah (chapter) and Ayah (verse) numbers that the given Ayah ID belongs to.
*
* @param ayahId - The Ayah ID to find the Surah and Ayah numbers for.
* @returns An array containing the Surah number and the Ayah number within that Surah.
*/
function findSurahAyahByAyahId(ayahId) {
	checkValidAyahId(ayahId);
	const ss = binarySearch(SurahList, ayahId, (aya, b) => aya - b[0]);
	const suraNum = ss < 0 ? -ss - 2 : ss;
	const ayahNo = ayahId - SurahList[suraNum][0] + 1;
	return [suraNum, ayahNo];
}

//#endregion
//#region src/findSurahByAyahId.ts
/**
* Finds a Surah based on the provided Ayah ID.
*
* @param ayaId - The unique identifier of the Ayah
* @returns The Surah that contains the specified Ayah
*
* @example
* const surah = findSurahByAyahId(1234);
*/
function findSurahByAyahId(ayaId) {
	return findSurahAyahByAyahId(ayaId)[0];
}

//#endregion
//#region src/findJuzAndShift.ts
/**
* Finds the juz (section) that contains the specified ayah (verse) and calculates the number of ayahs between the start of the juz and the start of the surah (chapter) that contains the ayah.
*
* @param surah - The surah (chapter) that contains the ayah.
* @param ayah - The ayah (verse) number.
* @returns An object containing the following properties:
*   - `juz`: The juz (section) that contains the ayah.
*   - `leftAyahId`: The ayah ID of the first ayah in the juz.
*   - `ayahsBetweenJuzSurah`: The number of ayahs between the start of the juz and the start of the surah (positive if the surah starts is in the juz, negative if the surah starts before the juz).
*/
function findJuzAndShift(surah, ayah) {
	const ayahId = findAyahIdBySurah(surah, ayah);
	const juz = findJuzByAyahId(ayahId);
	const juzLeftAyahId = JuzList[juz];
	const [surahStartAyahId] = SurahList[surah];
	return {
		juz,
		ayahsBetweenJuzSurah: surahStartAyahId - juzLeftAyahId,
		leftAyahId: juzLeftAyahId
	};
}
/**
* Finds the Juz number and calculates the shift between Juz start and Surah start for a given Ayah ID
*
* @param ayahId - The unique identifier of an Ayah (verse) in the Quran
*
* @returns An object containing:
* - juz: The Juz number where the Ayah is located
* - leftAyahId: The starting Ayah ID of the Juz
* - ayahsBetweenJuzSurah: The number of Ayahs between the Juz start and the Surah start
*
* @throws Error If the provided Ayah ID is invalid
*/
function findJuzAndShiftByAyahId(ayahId) {
	checkValidAyahId(ayahId);
	const juz = findJuzByAyahId(ayahId);
	const leftAyahId = JuzList[juz];
	const surah = findSurahByAyahId(ayahId);
	const [surahStartAyahId] = SurahList[surah];
	return {
		juz,
		ayahsBetweenJuzSurah: surahStartAyahId - leftAyahId,
		leftAyahId
	};
}

//#endregion
//#region src/findJuzMetaBySurah.ts
/**
* Finds the SurahJuzMeta for a given Surah and Ayah.
*
* @param surah - The Surah (chapter) number.
* @param ayah - The Ayah (verse) number.
* @returns The SurahJuzMeta object containing the left juz, ayahs between juz and surah, right juz, ayah ID of first ayah in left juz, and last ayah ID of right juz .
*/
function findJuzMetaBySurah(surah, ayah = 1) {
	const { juz: leftjuz, ayahsBetweenJuzSurah, leftAyahId } = findJuzAndShift(surah, ayah);
	let rightJuz = leftjuz;
	while (rightJuz < meta.numJuzs && findSurahByAyahId(JuzList[rightJuz + 1]) === surah) rightJuz++;
	return {
		leftjuz,
		ayahsBetweenJuzSurah,
		rightJuz,
		leftAyahId,
		rightAyahId: JuzList[rightJuz + 1]
	};
}

//#endregion
//#region src/lists/manzilList.ts
const ManzilList = [
	0,
	1,
	670,
	1365,
	2030,
	2933,
	3789,
	4631,
	6237
];

//#endregion
//#region src/findManzilByAyahId.ts
/**
* Finds the Manzil number for a given Ayah ID using binary search.
* A Manzil is one of seven approximately equal divisions of the Quran.
*
* @param ayahId - The ID of the Ayah to find the Manzil for
* @returns The Manzil number (1-7) containing the specified Ayah
* @throws {@link Error} If the provided Ayah ID is invalid
*
* @example
* ```typescript
* const manzil = findManzilByAyahId(2345); // Returns the Manzil containing Ayah 2345
* ```
*/
function findManzilByAyahId(ayahId) {
	checkValidAyahId(ayahId);
	const jj = binarySearch(ManzilList, ayahId);
	const juz = jj < 0 ? -jj - 2 : jj;
	return juz;
}

//#endregion
//#region src/findManzil.ts
/**
* Finds the Manzil number for a given Surah and Ayah
* @param surah - The Surah number or object
* @param ayah - Optional Ayah number (defaults to 1)
* @returns The Manzil number (1-7) containing the specified Ayah
*/
function findManzil(surah, ayah = 1) {
	const ayahId = findAyahIdBySurah(surah, ayah);
	return findManzilByAyahId(ayahId);
}

//#endregion
//#region src/lists/pageList.ts
const PageList = [
	0,
	1,
	8,
	13,
	24,
	32,
	37,
	45,
	56,
	65,
	69,
	77,
	84,
	91,
	96,
	101,
	109,
	113,
	120,
	127,
	134,
	142,
	149,
	153,
	161,
	171,
	177,
	184,
	189,
	194,
	198,
	204,
	210,
	218,
	223,
	227,
	232,
	238,
	241,
	245,
	253,
	256,
	260,
	264,
	267,
	272,
	277,
	282,
	289,
	290,
	294,
	303,
	309,
	316,
	323,
	331,
	339,
	346,
	355,
	364,
	371,
	377,
	385,
	394,
	402,
	409,
	415,
	426,
	434,
	442,
	447,
	451,
	459,
	467,
	474,
	480,
	488,
	494,
	500,
	505,
	508,
	513,
	517,
	520,
	527,
	531,
	538,
	545,
	553,
	559,
	568,
	573,
	580,
	585,
	588,
	595,
	599,
	607,
	615,
	621,
	628,
	634,
	641,
	648,
	656,
	664,
	669,
	672,
	675,
	679,
	683,
	687,
	693,
	701,
	706,
	711,
	715,
	720,
	727,
	734,
	740,
	746,
	752,
	759,
	765,
	773,
	778,
	783,
	790,
	798,
	808,
	817,
	825,
	834,
	842,
	849,
	858,
	863,
	871,
	880,
	884,
	891,
	900,
	908,
	914,
	921,
	927,
	932,
	936,
	941,
	947,
	955,
	966,
	977,
	985,
	992,
	998,
	1006,
	1012,
	1022,
	1028,
	1036,
	1042,
	1050,
	1059,
	1075,
	1085,
	1092,
	1098,
	1104,
	1110,
	1114,
	1118,
	1125,
	1133,
	1142,
	1150,
	1161,
	1169,
	1177,
	1186,
	1194,
	1201,
	1206,
	1213,
	1222,
	1230,
	1236,
	1242,
	1249,
	1256,
	1262,
	1267,
	1272,
	1276,
	1283,
	1290,
	1297,
	1304,
	1308,
	1315,
	1322,
	1329,
	1335,
	1342,
	1347,
	1353,
	1358,
	1365,
	1371,
	1379,
	1385,
	1390,
	1398,
	1407,
	1418,
	1426,
	1435,
	1443,
	1453,
	1462,
	1471,
	1479,
	1486,
	1493,
	1502,
	1511,
	1519,
	1527,
	1536,
	1545,
	1555,
	1562,
	1571,
	1582,
	1591,
	1601,
	1611,
	1619,
	1627,
	1634,
	1640,
	1649,
	1660,
	1666,
	1675,
	1683,
	1692,
	1700,
	1708,
	1713,
	1721,
	1726,
	1736,
	1742,
	1750,
	1756,
	1761,
	1769,
	1775,
	1784,
	1793,
	1803,
	1818,
	1834,
	1854,
	1873,
	1893,
	1908,
	1916,
	1928,
	1936,
	1944,
	1956,
	1966,
	1974,
	1981,
	1989,
	1995,
	2004,
	2012,
	2020,
	2030,
	2037,
	2047,
	2057,
	2068,
	2079,
	2088,
	2096,
	2105,
	2116,
	2126,
	2134,
	2145,
	2156,
	2161,
	2168,
	2175,
	2186,
	2194,
	2202,
	2215,
	2224,
	2238,
	2251,
	2262,
	2276,
	2289,
	2302,
	2315,
	2327,
	2346,
	2361,
	2386,
	2400,
	2413,
	2425,
	2436,
	2447,
	2462,
	2474,
	2484,
	2494,
	2508,
	2519,
	2528,
	2541,
	2556,
	2565,
	2574,
	2585,
	2596,
	2601,
	2611,
	2619,
	2626,
	2634,
	2642,
	2651,
	2660,
	2668,
	2674,
	2691,
	2701,
	2716,
	2733,
	2748,
	2763,
	2778,
	2792,
	2802,
	2812,
	2819,
	2823,
	2828,
	2835,
	2845,
	2850,
	2853,
	2858,
	2867,
	2876,
	2888,
	2899,
	2911,
	2923,
	2933,
	2952,
	2972,
	2993,
	3016,
	3044,
	3069,
	3092,
	3116,
	3139,
	3160,
	3173,
	3182,
	3195,
	3204,
	3215,
	3223,
	3236,
	3248,
	3258,
	3266,
	3274,
	3281,
	3288,
	3296,
	3303,
	3312,
	3323,
	3330,
	3337,
	3347,
	3355,
	3364,
	3371,
	3379,
	3386,
	3393,
	3404,
	3415,
	3425,
	3434,
	3442,
	3451,
	3460,
	3470,
	3481,
	3489,
	3498,
	3504,
	3515,
	3524,
	3534,
	3540,
	3549,
	3556,
	3564,
	3569,
	3577,
	3584,
	3588,
	3596,
	3607,
	3614,
	3621,
	3629,
	3638,
	3646,
	3655,
	3664,
	3672,
	3679,
	3691,
	3699,
	3705,
	3718,
	3733,
	3746,
	3760,
	3776,
	3789,
	3813,
	3840,
	3865,
	3891,
	3915,
	3942,
	3971,
	3987,
	3997,
	4013,
	4032,
	4054,
	4064,
	4069,
	4080,
	4090,
	4099,
	4106,
	4115,
	4126,
	4133,
	4141,
	4150,
	4159,
	4167,
	4174,
	4183,
	4192,
	4200,
	4211,
	4219,
	4230,
	4239,
	4248,
	4257,
	4265,
	4273,
	4283,
	4288,
	4295,
	4304,
	4317,
	4324,
	4336,
	4348,
	4359,
	4373,
	4386,
	4399,
	4415,
	4433,
	4454,
	4474,
	4487,
	4496,
	4506,
	4516,
	4525,
	4531,
	4539,
	4546,
	4557,
	4565,
	4575,
	4584,
	4593,
	4599,
	4607,
	4612,
	4617,
	4624,
	4631,
	4646,
	4666,
	4682,
	4706,
	4727,
	4750,
	4767,
	4785,
	4811,
	4829,
	4853,
	4874,
	4896,
	4918,
	4942,
	4969,
	4996,
	5030,
	5056,
	5079,
	5087,
	5094,
	5100,
	5105,
	5111,
	5116,
	5126,
	5130,
	5136,
	5143,
	5151,
	5156,
	5162,
	5169,
	5178,
	5186,
	5193,
	5200,
	5209,
	5218,
	5223,
	5230,
	5237,
	5242,
	5254,
	5268,
	5287,
	5314,
	5332,
	5358,
	5386,
	5415,
	5430,
	5448,
	5461,
	5476,
	5495,
	5513,
	5543,
	5571,
	5597,
	5617,
	5642,
	5673,
	5703,
	5728,
	5759,
	5801,
	5830,
	5855,
	5883,
	5910,
	5932,
	5964,
	5994,
	6017,
	6044,
	6073,
	6099,
	6126,
	6138,
	6156,
	6177,
	6194,
	6208,
	6222,
	6237
];

//#endregion
//#region src/findPage.ts
/**
* Finds the page number for the given Surah and Ayah number.
*
* @param surah - The Surah to find the page for.
* @param ayah - The Ayah number to find the page for.
* @returns The page number for the given Surah and Ayah.
*/
function findPage(surah, ayah = 1) {
	checkValidSurah(surah);
	const ayahId = findAyahIdBySurah(surah, ayah);
	const jj = binarySearch(PageList, ayahId);
	const page = jj < 0 ? -jj - 2 : jj;
	return page;
}

//#endregion
//#region src/findPagebyAyahId.ts
/**
* Returns the page number for a given ayah ID in the Quran.
*
* @param ayahId - A numeric identifier representing a verse (ayah) in the Quran
* @returns The page number where the specified ayah can be found
* @throws Will throw an error if the ayahId is invalid
*
* @example
* ```ts
* const page = findPagebyAyahId(142); // Returns the page number containing ayah 142
* ```
*/
function findPagebyAyahId(ayahId) {
	checkValidAyahId(ayahId);
	const jj = binarySearch(PageList, ayahId);
	const page = jj < 0 ? -jj - 2 : jj;
	return page;
}

//#endregion
//#region src/lists/rukuList.ts
const RukuList = [
	0,
	1,
	8,
	15,
	28,
	37,
	47,
	54,
	67,
	69,
	79,
	90,
	94,
	104,
	111,
	120,
	129,
	137,
	149,
	155,
	160,
	171,
	175,
	184,
	190,
	196,
	204,
	218,
	224,
	229,
	236,
	239,
	243,
	250,
	256,
	261,
	265,
	268,
	274,
	281,
	289,
	291,
	294,
	303,
	314,
	324,
	335,
	348,
	357,
	365,
	374,
	385,
	395,
	403,
	414,
	423,
	437,
	442,
	449,
	465,
	474,
	483,
	494,
	504,
	508,
	516,
	519,
	527,
	536,
	544,
	553,
	564,
	570,
	581,
	585,
	590,
	594,
	598,
	606,
	609,
	620,
	628,
	635,
	646,
	656,
	665,
	670,
	675,
	681,
	689,
	696,
	704,
	713,
	720,
	726,
	736,
	747,
	756,
	763,
	770,
	778,
	785,
	790,
	800,
	810,
	820,
	831,
	840,
	845,
	850,
	860,
	872,
	880,
	884,
	890,
	900,
	911,
	919,
	930,
	934,
	940,
	944,
	955,
	965,
	980,
	986,
	994,
	1002,
	1008,
	1013,
	1019,
	1027,
	1039,
	1048,
	1054,
	1063,
	1081,
	1084,
	1096,
	1102,
	1106,
	1112,
	1117,
	1126,
	1136,
	1143,
	1161,
	1171,
	1180,
	1189,
	1198,
	1205,
	1209,
	1219,
	1225,
	1230,
	1236,
	1242,
	1252,
	1260,
	1265,
	1273,
	1278,
	1295,
	1302,
	1308,
	1316,
	1325,
	1335,
	1346,
	1354,
	1358,
	1365,
	1375,
	1385,
	1395,
	1405,
	1418,
	1425,
	1435,
	1447,
	1457,
	1468,
	1474,
	1482,
	1498,
	1509,
	1523,
	1534,
	1542,
	1557,
	1569,
	1583,
	1597,
	1603,
	1617,
	1626,
	1632,
	1639,
	1646,
	1654,
	1665,
	1676,
	1690,
	1701,
	1708,
	1715,
	1726,
	1734,
	1739,
	1745,
	1751,
	1757,
	1763,
	1772,
	1778,
	1785,
	1792,
	1803,
	1818,
	1828,
	1847,
	1863,
	1882,
	1902,
	1911,
	1923,
	1927,
	1936,
	1942,
	1952,
	1962,
	1967,
	1972,
	1978,
	1985,
	1991,
	2002,
	2012,
	2021,
	2030,
	2040,
	2052,
	2060,
	2070,
	2082,
	2090,
	2100,
	2107,
	2114,
	2123,
	2130,
	2141,
	2153,
	2158,
	2163,
	2172,
	2185,
	2190,
	2194,
	2200,
	2211,
	2223,
	2242,
	2251,
	2266,
	2291,
	2301,
	2316,
	2333,
	2349,
	2373,
	2403,
	2425,
	2438,
	2453,
	2464,
	2477,
	2484,
	2494,
	2513,
	2525,
	2534,
	2559,
	2577,
	2596,
	2606,
	2618,
	2621,
	2629,
	2634,
	2644,
	2653,
	2660,
	2668,
	2674,
	2696,
	2706,
	2724,
	2751,
	2766,
	2792,
	2802,
	2812,
	2818,
	2826,
	2832,
	2842,
	2849,
	2853,
	2856,
	2865,
	2876,
	2890,
	2900,
	2916,
	2933,
	2942,
	2966,
	2985,
	3002,
	3037,
	3055,
	3073,
	3092,
	3108,
	3124,
	3160,
	3174,
	3191,
	3204,
	3218,
	3226,
	3242,
	3253,
	3266,
	3274,
	3281,
	3295,
	3303,
	3313,
	3328,
	3341,
	3354,
	3363,
	3371,
	3385,
	3392,
	3404,
	3410,
	3420,
	3429,
	3437,
	3450,
	3463,
	3470,
	3481,
	3489,
	3504,
	3515,
	3526,
	3534,
	3542,
	3554,
	3561,
	3568,
	3574,
	3586,
	3592,
	3602,
	3607,
	3616,
	3628,
	3637,
	3643,
	3652,
	3661,
	3668,
	3675,
	3687,
	3698,
	3706,
	3718,
	3738,
	3756,
	3773,
	3789,
	3810,
	3863,
	3902,
	3927,
	3971,
	3985,
	3997,
	4011,
	4035,
	4059,
	4068,
	4080,
	4090,
	4100,
	4111,
	4122,
	4129,
	4134,
	4143,
	4154,
	4161,
	4171,
	4184,
	4194,
	4202,
	4212,
	4219,
	4227,
	4237,
	4244,
	4251,
	4263,
	4273,
	4282,
	4292,
	4302,
	4316,
	4326,
	4341,
	4351,
	4361,
	4371,
	4382,
	4393,
	4415,
	4444,
	4457,
	4474,
	4485,
	4495,
	4500,
	4511,
	4521,
	4531,
	4537,
	4546,
	4557,
	4565,
	4574,
	4584,
	4594,
	4601,
	4610,
	4613,
	4623,
	4631,
	4646,
	4660,
	4676,
	4699,
	4722,
	4736,
	4764,
	4785,
	4810,
	4817,
	4847,
	4869,
	4887,
	4902,
	4927,
	4947,
	4980,
	5018,
	5054,
	5076,
	5086,
	5095,
	5101,
	5105,
	5111,
	5118,
	5127,
	5137,
	5144,
	5151,
	5157,
	5164,
	5173,
	5178,
	5186,
	5189,
	5197,
	5200,
	5210,
	5218,
	5225,
	5230,
	5237,
	5242,
	5256,
	5272,
	5305,
	5324,
	5361,
	5376,
	5411,
	5420,
	5440,
	5448,
	5467,
	5476,
	5495,
	5496,
	5527,
	5552,
	5582,
	5592,
	5614,
	5623,
	5663,
	5673,
	5703,
	5713,
	5739,
	5759,
	5801,
	5830,
	5849,
	5885,
	5910,
	5932,
	5949,
	5968,
	5994,
	6024,
	6044,
	6059,
	6080,
	6091,
	6099,
	6107,
	6126,
	6131,
	6139,
	6147,
	6158,
	6169,
	6177,
	6180,
	6189,
	6194,
	6198,
	6205,
	6208,
	6214,
	6217,
	6222,
	6226,
	6231,
	6237
];

//#endregion
//#region src/findRukuByAyahId.ts
/**
* Finds the Ruku number for a given Ayah ID using binary search.
*
* @param ayahId - The unique identifier of an Ayah in format: surah:ayah (e.g., "2:255")
* @returns The Ruku number corresponding to the given Ayah ID
* @throws {@link Error} If the provided Ayah ID is invalid
*
* @example
* ```ts
* const ruku = findRukuByAyahId("2:255");
* // Returns the Ruku number containing Ayah 255 of Surah 2
* ```
*/
function findRukuByAyahId(ayahId) {
	checkValidAyahId(ayahId);
	const jj = binarySearch(RukuList, ayahId);
	const juz = jj < 0 ? -jj - 2 : jj;
	return juz;
}

//#endregion
//#region src/findRangeAroundAyah.ts
/**
* Finds the range of ayahs surrounding a given ayah based on specified mode
* @param ayahId - The unique identifier of the ayah
* @param mode - The scope for finding the range:
*   - "juz": Returns range of ayahs in the same juz
*   - "surah": Returns range of ayahs in the same surah
*   - "ayah": Returns the single ayah as both start and end of range
*   - "page": Returns range of ayahs on the same page
*   - "ruku": Returns range of ayahs on the same ruku
*   - "all": Returns range covering all ayahs (1 to total number of ayahs)
* @returns An array of two numbers representing the start and end ayah IDs of the range [startAyahId, endAyahId]
*/
function findRangeAroundAyah(ayahId, mode) {
	switch (mode) {
		case "juz": {
			const juz = findJuzByAyahId(ayahId);
			return [JuzList[juz], JuzList[juz + 1] - 1];
		}
		case "surah": {
			const surah = findSurahByAyahId(ayahId);
			return [SurahList[surah][0], SurahList[surah + 1][0] - 1];
		}
		case "ayah": return [ayahId, ayahId];
		case "page": {
			const page = findPagebyAyahId(ayahId);
			return [PageList[page], PageList[page + 1] - 1];
		}
		case "ruku": {
			const ruku = findRukuByAyahId(ayahId);
			return [RukuList[ruku], RukuList[ruku + 1] - 1];
		}
		case "all":
		default: return [1, meta.numAyahs];
	}
}

//#endregion
//#region src/findRangeAroundSurahAyah.ts
/**
* Finds a range of ayahs around a given ayah based on the specified mode.
*
* @param surah - The surah number (1-114)
* @param ayah - The ayah number within the surah
* @param mode - The range mode: "juz", "surah", "ayah", "page", "ruku" or "all"
* @returns A tuple containing the start and end ayah IDs of the range
*/
function findRangeAroundSurahAyah(surah, ayah, mode) {
	checkValidSurah(surah);
	if (mode === "surah") return [SurahList[surah][0], SurahList[surah + 1][0] - 1];
	const ayahId = findAyahIdBySurah(surah, ayah);
	return findRangeAroundAyah(ayahId, mode);
}

//#endregion
//#region src/lists/hizbQuarterList.ts
const HizbQuarterList = [
	0,
	1,
	33,
	51,
	67,
	82,
	99,
	113,
	131,
	149,
	165,
	184,
	196,
	210,
	226,
	240,
	250,
	260,
	270,
	279,
	290,
	308,
	326,
	345,
	368,
	386,
	406,
	426,
	446,
	464,
	479,
	494,
	505,
	517,
	529,
	551,
	567,
	581,
	593,
	607,
	628,
	641,
	656,
	670,
	681,
	696,
	710,
	720,
	736,
	751,
	766,
	778,
	802,
	825,
	848,
	863,
	884,
	900,
	916,
	930,
	940,
	955,
	985,
	1001,
	1019,
	1042,
	1071,
	1096,
	1110,
	1125,
	1143,
	1161,
	1182,
	1201,
	1221,
	1236,
	1254,
	1269,
	1281,
	1295,
	1310,
	1328,
	1346,
	1357,
	1375,
	1390,
	1417,
	1435,
	1454,
	1479,
	1497,
	1514,
	1534,
	1557,
	1581,
	1603,
	1626,
	1649,
	1673,
	1697,
	1712,
	1726,
	1742,
	1760,
	1778,
	1803,
	1852,
	1902,
	1931,
	1952,
	1976,
	1991,
	2012,
	2030,
	2052,
	2079,
	2099,
	2128,
	2157,
	2172,
	2191,
	2215,
	2239,
	2272,
	2309,
	2349,
	2403,
	2431,
	2459,
	2484,
	2512,
	2534,
	2566,
	2596,
	2614,
	2633,
	2655,
	2674,
	2709,
	2748,
	2792,
	2812,
	2826,
	2844,
	2856,
	2876,
	2908,
	2933,
	2984,
	3043,
	3113,
	3160,
	3186,
	3215,
	3241,
	3264,
	3281,
	3303,
	3328,
	3341,
	3366,
	3386,
	3410,
	3440,
	3463,
	3491,
	3514,
	3534,
	3551,
	3564,
	3584,
	3593,
	3616,
	3630,
	3652,
	3675,
	3701,
	3733,
	3765,
	3810,
	3871,
	3933,
	3991,
	4022,
	4066,
	4090,
	4111,
	4134,
	4154,
	4174,
	4199,
	4227,
	4243,
	4265,
	4285,
	4299,
	4323,
	4349,
	4382,
	4431,
	4485,
	4511,
	4531,
	4555,
	4578,
	4601,
	4613,
	4626,
	4657,
	4706,
	4759,
	4810,
	4855,
	4902,
	4980,
	5054,
	5091,
	5105,
	5118,
	5137,
	5157,
	5178,
	5192,
	5218,
	5230,
	5242,
	5272,
	5324,
	5394,
	5448,
	5495,
	5552,
	5610,
	5673,
	5759,
	5830,
	5885,
	5949,
	6024,
	6091,
	6155,
	6237
];

//#endregion
//#region src/findRubAlHizbByAyahId.ts
/**
* Finds the Maqra/Rub-al-Hizb  of the Quran that contains the given Ayah (verse) ID.
*
* @param ayahId - The ID of the Ayah (verse) to find the Juz for.
* @returns The Maqra of the Quran that contains the given Ayah ID.
*/
function findRubAlHizbByAyahId(ayahId) {
	checkValidAyahId(ayahId);
	const jj = binarySearch(HizbQuarterList, ayahId);
	const page = jj < 0 ? -jj - 2 : jj;
	return page;
}

//#endregion
//#region src/findRubAlHizb.ts
/**
* Finds the Juz (part) and Rub-ul-Hizb/Maqra (quarter section) of the Quran that the given Ayah (verse) belongs to.
*
* @param surah - The Surah (chapter) number.
* @param ayah - The Ayah (verse) number. Defaults to 1 if not provided.

* @returns An object containing the Juz (part) number, Hizb (section) number, and the index of the Hizb that the given Ayah belongs to.
*/
function findRubAlHizb(surah, ayah = 1) {
	checkValidSurah(surah);
	const ayahId = findAyahIdBySurah(surah, ayah);
	return findRubAlHizbByAyahId(ayahId);
}

//#endregion
//#region src/getRubAlHizb.ts
/**
* Retrieves the basic metadata for a specific quarter (rub' al-hizb) of the Quran.
*
* @param quarterIndex - The index of the quarter (rub' al-hizb) to retrieve metadata for, where 1 is the first quarter.
* @returns An object containing the metadata for the specified quarter, including the juz' (part), hizb (section), and the quarter (rub' al-hizb) index.
*/
function getRubAlHizb(quarterIndex) {
	const juz = Math.floor((quarterIndex - 1) / 8) + 1;
	const hizbIndex = Math.floor((quarterIndex - 1) / 4) + 1;
	const juzPart = quarterIndex % 8 || 8;
	return {
		juz,
		hizbId: hizbIndex,
		juzPart,
		rubAlHizbId: quarterIndex
	};
}

//#endregion
//#region src/getRubAlHizbByAyahId.ts
/**
* Finds the Juz, Hizb, and Rub-el-Hizb id for the given Ayah ID.
*
* @param ayahId - The Ayah ID to find the Juz, Hizb, and Hizb ID for.
* @returns An object containing the Juz, Hizb, and Hizb ID for the given Ayah ID.
*/
function getRubAlHizbByAyahId(ayahId) {
	checkValidAyahId(ayahId);
	const quarterIndex = findRubAlHizbByAyahId(ayahId);
	return getRubAlHizb(quarterIndex);
}

//#endregion
//#region src/lists/sajdaList.ts
const SajdaList = [
	[1160, "recommended"],
	[1722, "recommended"],
	[1951, "recommended"],
	[2138, "recommended"],
	[2308, "recommended"],
	[2613, "recommended"],
	[2672, "recommended"],
	[2915, "recommended"],
	[3185, "recommended"],
	[3518, "obligatory"],
	[3994, "recommended"],
	[4256, "obligatory"],
	[4846, "obligatory"],
	[5905, "recommended"],
	[6125, "obligatory"]
];

//#endregion
//#region src/getAyahMeta.ts
/**
* Retrieves metadata for a specific ayah of the Quran.
*
* @param ayahId - The ayahId number to retrieve metadata for (1-6236)
* @returns An object containing the ayah related meta, including information about the surah, juz, and quarter the ayah is in.
* @throws RangeError If the ayahId number is not between 1 and 6236
*/
function getAyahMeta(ayahId) {
	checkValidAyahId(ayahId);
	const quarterData = getRubAlHizbByAyahId(ayahId);
	const [surah, ayah] = findSurahAyahByAyahId(ayahId);
	const page = findPagebyAyahId(ayahId);
	const isSajdahAyah = binarySearch(SajdaList, ayahId, (a, b) => a - b[0]) >= 0;
	const rk = binarySearch(RukuList, ayahId);
	const isStartOfRuku = rk > 0;
	const ruku = isStartOfRuku ? rk : -rk - 2;
	const isStartOfSurah = SurahList[surah][0] === ayahId;
	const isStartOfPage = PageList[page] === ayahId;
	const isStartOfJuz = JuzList[quarterData.juz] === ayahId;
	const isStartOfQuarter = HizbQuarterList[quarterData.rubAlHizbId] === ayahId;
	const isEndOfSurah = SurahList[surah + 1][0] - 1 === ayahId;
	const isEndOfPage = PageList[page + 1] - 1 === ayahId;
	const isEndOfJuz = JuzList[quarterData.juz + 1] - 1 === ayahId;
	const isEndOfRuku = binarySearch(RukuList, ayahId + 1) > 0;
	const isEndOfQuarter = HizbQuarterList[quarterData.rubAlHizbId + 1] - 1 === ayahId;
	return {
		...quarterData,
		surah,
		ayah,
		page,
		isStartOfQuarter,
		isEndOfQuarter,
		isSajdahAyah,
		isStartOfPage,
		isEndOfPage,
		ruku,
		isStartOfJuz,
		isEndOfJuz,
		isStartOfSurah,
		isEndOfSurah,
		isStartOfRuku,
		isEndOfRuku
	};
}

//#endregion
//#region src/getAyahMetasForSurah.ts
/**

* Retrieves metadata for all ayahs in a specific surah.

*

* @param surahNumber - The surah number (1-114)

* @returns Array of AyahMeta objects for each ayah in the surah

* @throws RangeError If the surah number is not between 1 and 114

*/
function getAyahMetasForSurah(surahNumber) {
	checkValidSurah(surahNumber);
	const [startAyahId, ayahCount] = SurahList[surahNumber];
	const endAyahId = startAyahId + ayahCount - 1;
	const result = [];
	let meta$1 = getAyahMeta(startAyahId);
	for (let ayahId = startAyahId; ayahId <= endAyahId; ayahId++) {
		if (ayahId > startAyahId) {
			meta$1 = structuredClone(meta$1);
			meta$1.ayah += 1;
			meta$1.isStartOfSurah = false;
			meta$1.isEndOfSurah = endAyahId === ayahId;
			if (PageList[meta$1.page + 1] === ayahId) {
				meta$1.page += 1;
				meta$1.isStartOfPage = true;
			} else meta$1.isStartOfPage = false;
			meta$1.isEndOfPage = PageList[meta$1.page + 1] === ayahId + 1;
			if (RukuList[meta$1.ruku + 1] === ayahId) {
				meta$1.ruku += 1;
				meta$1.isStartOfRuku = true;
			} else meta$1.isStartOfRuku = false;
			meta$1.isEndOfRuku = RukuList[meta$1.ruku + 1] === ayahId + 1;
			meta$1.isEndOfJuz = JuzList[meta$1.juz + 1] === ayahId + 1;
			if (JuzList[meta$1.juz + 1] === ayahId) {
				meta$1.juz += 1;
				meta$1.hizbId += 1;
				meta$1.isStartOfJuz = true;
			} else meta$1.isStartOfJuz = false;
			meta$1.isEndOfQuarter = HizbQuarterList[meta$1.rubAlHizbId + 1] === ayahId + 1;
			if (HizbQuarterList[meta$1.rubAlHizbId + 1] === ayahId) {
				meta$1.rubAlHizbId += 1;
				meta$1.juzPart = meta$1.isStartOfJuz ? 1 : meta$1.juzPart + 1;
				meta$1.isStartOfQuarter = true;
				if (meta$1.juzPart === 5) meta$1.hizbId += 1;
			} else meta$1.isStartOfQuarter = false;
			meta$1.isSajdahAyah = SajdaList.some((x) => x[0] === ayahId);
		}
		result.push(meta$1);
	}
	return result;
}

//#endregion
//#region src/getJuzMeta.ts
/**

* Retrieves metadata for a specific Juz of the Quran.

*

* @param juzNum - The Juz number to retrieve metadata for (1-30)

* @returns An object containing the Juz number, first ayah, and last ayah in the Juz

* @throws RangeError If the Juz number is not between 1 and 30

*/
function getJuzMeta(juzNum) {
	checkValidJuz(juzNum);
	const [firstAyahId, nextJuzAyahId] = [JuzList[juzNum], JuzList[juzNum + 1]];
	const lastAyahId = nextJuzAyahId - 1;
	return {
		juzNum,
		firstAyahId,
		lastAyahId,
		first: findSurahAyahByAyahId(firstAyahId),
		last: findSurahAyahByAyahId(lastAyahId)
	};
}

//#endregion
//#region src/getList.ts
const partNames = [
	"surah",
	"juz",
	"page",
	"manzil",
	"rubAlHizb",
	"ruku"
];
/**
* An object that maps part types to their corresponding data lists.
*/
const parts = {
	surah: SurahList,
	juz: JuzList,
	rubAlHizb: HizbQuarterList,
	page: PageList,
	manzil: ManzilList,
	ruku: RukuList
};
function toPartFormatter(type) {
	return type === "surah" ? ([startAyahId, ayahCount]) => ({
		startAyahId,
		ayahCount
	}) : (ayahId, index) => {
		const ayahCount = parts[type][index + 2] - ayahId;
		return {
			startAyahId: ayahId,
			ayahCount
		};
	};
}
/**
* Retrieves a formatted list of Quran parts based on the specified type.
* @param type - The type of parts to retrieve (e.g., juz, hizb, rub)
* @returns An array of formatted part blocks, excluding the first and last elements
*/
function getList(type) {
	const list = parts[type];
	return list.slice(1, list.length - 1).map(toPartFormatter(type));
}

//#endregion
//#region src/getManzilMeta.ts
/**

* Retrieves metadata for a specific Manzil (section) of the Quran

*

* @param manzilNum - The number of the Manzil (1-7)

* @returns The metadata for the specified Manzil containing:

*  - manzilNum: The Manzil number

*  - firstAyahId: ID of the first ayah in the Manzil

*  - lastAyahId: ID of the last ayah in the Manzil

*  - first: Surah and ayah details of the first ayah

*  - last: Surah and ayah details of the last ayah

* @throws Will throw an error if manzilNum is invalid

*/
function getManzilMeta(manzilNum) {
	checkValidManzil(manzilNum);
	const [firstAyahId, nextManzilAyahId] = [ManzilList[manzilNum], ManzilList[manzilNum + 1]];
	const lastAyahId = nextManzilAyahId - 1;
	return {
		manzilNum,
		firstAyahId,
		lastAyahId,
		first: findSurahAyahByAyahId(firstAyahId),
		last: findSurahAyahByAyahId(lastAyahId)
	};
}

//#endregion
//#region src/getPageMeta.ts
/**
* Retrieves metadata for a specific page of the Quran.
*
* @param pageNum - The page number to retrieve metadata for (1-604)
* @returns {@link PageMeta} An object containing the page number, first ayah, and last ayah on the page
* @throws {@link RangeError} If the page number is not between 1 and 604
*/
function getPageMeta(pageNum) {
	checkValidPage(pageNum);
	const [firstAyahId, nextPage] = [PageList[pageNum], PageList[pageNum + 1]];
	const lastAyahId = nextPage - 1;
	return {
		pageNum,
		firstAyahId,
		lastAyahId,
		first: findSurahAyahByAyahId(firstAyahId),
		last: findSurahAyahByAyahId(lastAyahId)
	};
}

//#endregion
//#region src/getRukuMeta.ts
/**

* Retrieves metadata for a specific Ruku (section) of the Quran.

* @param rukuNum - The number of the Ruku to retrieve metadata for

* @returns {@link RukuMeta} An object containing metadata about the Ruku including:

*  - rukuNum: The Ruku number

*  - firstAyahId: The global Ayah ID of the first verse in this Ruku

*  - lastAyahId: The global Ayah ID of the last verse in this Ruku

*  - first: The Surah and Ayah numbers for the first verse

*  - last: The Surah and Ayah numbers for the last verse

* @throws Will throw an error if the provided Ruku number is invalid

*/
function getRukuMeta(rukuNum) {
	checkValidRuku(rukuNum);
	const [firstAyahId, nextRukuAyahId] = [RukuList[rukuNum], RukuList[rukuNum + 1]];
	const lastAyahId = nextRukuAyahId - 1;
	return {
		rukuNum,
		firstAyahId,
		lastAyahId,
		first: findSurahAyahByAyahId(firstAyahId),
		last: findSurahAyahByAyahId(lastAyahId)
	};
}

//#endregion
//#region src/getRubAlHizbMeta.ts
/**
* Retrieves the metadata for a specific quarter (rub' al-hizb) of the Quran.
*
* @param quarterIndex - The index of the quarter (rub' al-hizb) to retrieve metadata for, where 1 is the first quarter.
* @returns An object containing the metadata for the specified quarter, including the juz' (part), hizb (section), and the quarter (rub' al-hizb) index.
*/
function getRubAlHizbMeta(quarterIndex) {
	const res = getRubAlHizb(quarterIndex);
	const [firstAyahId, nextJuzAyahId] = [HizbQuarterList[quarterIndex], HizbQuarterList[quarterIndex + 1]];
	const lastAyahId = nextJuzAyahId - 1;
	return {
		firstAyahId,
		lastAyahId,
		first: findSurahAyahByAyahId(firstAyahId),
		last: findSurahAyahByAyahId(lastAyahId),
		...res
	};
}

//#endregion
//#region src/getRubAlHizbMetaByAyahId.ts
/**
* Finds the Juz, Hizb, and Rub-el-Hizb id for the given Ayah ID.
*
* @param ayahId - The Ayah ID to find the Juz, Hizb, and Hizb ID for.
* @returns An object containing the Juz, Hizb, and Hizb ID for the given Ayah ID.
*/
function getRubAlHizbMetaByAyahId(ayahId) {
	checkValidAyahId(ayahId);
	const quarterIndex = findRubAlHizbByAyahId(ayahId);
	return getRubAlHizbMeta(quarterIndex);
}

//#endregion
//#region src/getSurahMeta.ts
/**

* Gets the metadata for the specified Surah.

*

* @param surahNum - The Surah to get the metadata for.

* @returns The metadata for the specified Surah.

*/
function getSurahMeta(surahNum) {
	const [firstAyahId, ayahCount, surahOrder, rukuCount, name, isMeccan] = getSurahInfo(surahNum);
	const lastAyahId = firstAyahId + ayahCount - 1;
	return {
		surahNum,
		ayahCount,
		surahOrder,
		rukuCount,
		name,
		isMeccan,
		firstAyahId,
		lastAyahId,
		first: [surahNum, 1],
		last: [surahNum, ayahCount]
	};
}

//#endregion
//#region src/isAyahJuzFirst.ts
/**
* Returns the Juz (part) number that the given Ayah (verse) belongs to.
*
*
* @param ayahId - The Ayah Id (verse) number.
* @returns The Juz (part) number that the given Ayah belongs to. Returns Positive number if ayah is first ayah of juz, number is juz number
*/
function isAyahJuzFirst(ayahId) {
	checkValidAyahId(ayahId);
	return binarySearch(JuzList, ayahId);
}

//#endregion
//#region src/isAyahPageFirst.ts
/**

* Determines if the given ayah is the first ayah of a juz.

*

* @param ayahId - The ayah id .

* @returns The page number if the ayah is the first ayah of the page, otherwise -1.

*/
function isAyahPageFirst(ayahId) {
	checkValidAyahId(ayahId);
	return binarySearch(PageList, ayahId);
}

//#endregion
//#region src/isSurahAyahJuzFirst.ts
/**
* Determines if a given Surah and Ayah combination marks the beginning of a Juz.
*
* @param surah - The Surah number to check
* @param ayah - The Ayah number within the Surah to check
* @returns The Juz number if the combination marks the start of a Juz, -1 otherwise
* @throws Error When the provided Surah number is invalid
*
* @example
* ```typescript
* isSurahAyahJuzFirst(2, 142) // Returns 2
* isSurahAyahJuzFirst(2, 143) // Returns -1
* ```
*/
function isSurahAyahJuzFirst(surah, ayah) {
	checkValidSurah(surah);
	const ayahId = findAyahIdBySurah(surah, ayah);
	return binarySearch(JuzList, ayahId);
}

//#endregion
//#region src/isSurahAyahPageFirst.ts
/**
* Determines if an ayah is the first ayah on its page in the Quran
* @param surah - The surah number (1-114)
* @param ayah - The ayah number within the surah
* @returns The page number if the ayah is first on its page, -1 otherwise
* @throws Error If surah number is invalid
*/
function isSurahAyahPageFirst(surah, ayah) {
	checkValidSurah(surah);
	const ayahId = findAyahIdBySurah(surah, ayah);
	return binarySearch(PageList, ayahId);
}

//#endregion
//#region src/nextAyah.ts
/**
* Get the next ayah for the given surah and ayah number.
* @param surah - The surah number.
* @param ayah - The ayah number within the surah.
* @returns The surah and ayah number of the next ayah.
*/
function nextAyah(surah, ayah) {
	if (surah < 1 || surah > meta.numSurahs) throw new RangeError("Surah must be between 1 and " + meta.numSurahs);
	const ayahId = findAyahIdBySurah(surah, ayah);
	return findSurahAyahByAyahId(ayahId == meta.numAyahs ? 1 : ayahId + 1);
}

//#endregion
//#region src/prevAyah.ts
/**
* Get the previous ayah for the given surah and ayah number.
* @param surah - The surah number.
* @param ayah - The ayah number within the surah.
* @returns The surah and ayah number of the previous ayah.
*/
function prevAyah(surah, ayah) {
	checkValidSurah(surah);
	const ayahId = findAyahIdBySurah(surah, ayah);
	return findSurahAyahByAyahId(ayahId == 1 ? meta.numAyahs : ayahId - 1);
}

//#endregion
//#region src/i18n/surah.en.ts
const surahNamesEn = [
	[],
	["Al-Faatiha", "The Opening"],
	["Al-Baqara", "The Cow"],
	["Aal-i-Imraan", "The Family of Imraan"],
	["An-Nisaa", "The Women"],
	["Al-Maaida", "The Table"],
	["Al-An'aam", "The Cattle"],
	["Al-A'raaf", "The Heights"],
	["Al-Anfaal", "The Spoils of War"],
	["At-Tawba", "The Repentance"],
	["Yunus", "Jonas"],
	["Hud", "Hud"],
	["Yusuf", "Joseph"],
	["Ar-Ra'd", "The Thunder"],
	["Ibrahim", "Abraham"],
	["Al-Hijr", "The Rock"],
	["An-Nahl", "The Bee"],
	["Al-Israa", "The Night Journey"],
	["Al-Kahf", "The Cave"],
	["Maryam", "Mary"],
	["Taa-Haa", "Taa-Haa"],
	["Al-Anbiyaa", "The Prophets"],
	["Al-Hajj", "The Pilgrimage"],
	["Al-Muminoon", "The Believers"],
	["An-Noor", "The Light"],
	["Al-Furqaan", "The Criterion"],
	["Ash-Shu'araa", "The Poets"],
	["An-Naml", "The Ant"],
	["Al-Qasas", "The Stories"],
	["Al-Ankaboot", "The Spider"],
	["Ar-Room", "The Romans"],
	["Luqman", "Luqman"],
	["As-Sajda", "The Prostration"],
	["Al-Ahzaab", "The Clans"],
	["Saba", "Sheba"],
	["Faatir", "The Originator"],
	["Yaseen", "Yaseen"],
	["As-Saaffaat", "Those drawn up in Ranks"],
	["Saad", "The letter Saad"],
	["Az-Zumar", "The Groups"],
	["Al-Ghaafir", "The Forgiver"],
	["Fussilat", "Explained in detail"],
	["Ash-Shura", "Consultation"],
	["Az-Zukhruf", "Ornaments of gold"],
	["Ad-Dukhaan", "The Smoke"],
	["Al-Jaathiya", "Crouching"],
	["Al-Ahqaf", "The Dunes"],
	["Muhammad", "Muhammad"],
	["Al-Fath", "The Victory"],
	["Al-Hujuraat", "The Inner Apartments"],
	["Qaaf", "The letter Qaaf"],
	["Adh-Dhaariyat", "The Winnowing Winds"],
	["At-Tur", "The Mount"],
	["An-Najm", "The Star"],
	["Al-Qamar", "The Moon"],
	["Ar-Rahmaan", "The Beneficent"],
	["Al-Waaqia", "The Inevitable"],
	["Al-Hadid", "The Iron"],
	["Al-Mujaadila", "The Pleading Woman"],
	["Al-Hashr", "The Exile"],
	["Al-Mumtahana", "She that is to be examined"],
	["As-Saff", "The Ranks"],
	["Al-Jumu'a", "Friday"],
	["Al-Munaafiqoon", "The Hypocrites"],
	["At-Taghaabun", "Mutual Disillusion"],
	["At-Talaaq", "Divorce"],
	["At-Tahrim", "The Prohibition"],
	["Al-Mulk", "The Sovereignty"],
	["Al-Qalam", "The Pen"],
	["Al-Haaqqa", "The Reality"],
	["Al-Ma'aarij", "The Ascending Stairways"],
	["Nooh", "Noah"],
	["Al-Jinn", "The Jinn"],
	["Al-Muzzammil", "The Enshrouded One"],
	["Al-Muddaththir", "The Cloaked One"],
	["Al-Qiyaama", "The Resurrection"],
	["Al-Insaan", "Man"],
	["Al-Mursalaat", "The Emissaries"],
	["An-Naba", "The Announcement"],
	["An-Naazi'aat", "Those who drag forth"],
	["Abasa", "He frowned"],
	["At-Takwir", "The Overthrowing"],
	["Al-Infitaar", "The Cleaving"],
	["Al-Mutaffifin", "Defrauding"],
	["Al-Inshiqaaq", "The Splitting Open"],
	["Al-Burooj", "The Constellations"],
	["At-Taariq", "The Morning Star"],
	["Al-A'laa", "The Most High"],
	["Al-Ghaashiya", "The Overwhelming"],
	["Al-Fajr", "The Dawn"],
	["Al-Balad", "The City"],
	["Ash-Shams", "The Sun"],
	["Al-Lail", "The Night"],
	["Ad-Dhuhaa", "The Morning Hours"],
	["Ash-Sharh", "The Consolation"],
	["At-Tin", "The Fig"],
	["Al-Alaq", "The Clot"],
	["Al-Qadr", "The Power, Fate"],
	["Al-Bayyina", "The Evidence"],
	["Az-Zalzala", "The Earthquake"],
	["Al-Aadiyaat", "The Chargers"],
	["Al-Qaari'a", "The Calamity"],
	["At-Takaathur", "Competition"],
	["Al-Asr", "The Declining Day, Epoch"],
	["Al-Humaza", "The Traducer"],
	["Al-Fil", "The Elephant"],
	["Quraish", "Quraysh"],
	["Al-Maa'un", "Almsgiving"],
	["Al-Kawthar", "Abundance"],
	["Al-Kaafiroon", "The Disbelievers"],
	["An-Nasr", "Divine Support"],
	["Al-Masad", "The Palm Fibre"],
	["Al-Ikhlaas", "Sincerity"],
	["Al-Falaq", "The Dawn"],
	["An-Naas", "Mankind"],
	[]
];

//#endregion
//#region src/i18n/surah.az.ts
const surahNamesAz = [
	[],
	["əl-Fatihə", "Kitabı açan "],
	["əl-Bəqərə", "İnək "],
	["Ali-İmran", "İmran ailəsi "],
	["ən-Nisa", "Qadınlar "],
	["əl-Maidə", "Süfrə "],
	["əl-Ənam", "Davar "],
	["əl-Əraf", "Sədd "],
	["əl-Ənfal", "Qənimət "],
	["ət-Tovbə", "Tövbə "],
	["Yunus", "Yunus"],
	["Hud", "Hud"],
	["Yusuf", "Yusif"],
	["ər-Rəd", "Göy gurultusu "],
	["İbrahim", "İbrahim"],
	["əl-Hicr", "Daşlı sahə "],
	["ən-Nəhl", "Bal arısı "],
	["əl-İsra", "İsrail oğulları "],
	["əl-Kəhf", "Mağara "],
	["Məryəm", "Məryəm "],
	["Ta ha", "Taha"],
	["əl-Ənbiya", "Peyğəmbərlər "],
	["əl-Həcc", "Həcc "],
	["əl-Muminun", "Möminlər "],
	["ən-Nur", "Nur "],
	["əl-Furqan", "Fəqləndirmə "],
	["əş-Şuəra", "Şairlər "],
	["ən-Nəml", "Qarışqalar "],
	["əl-Qəsəs", "Hekayət "],
	["əl-Ənkəbut", "Hörümçək "],
	["ər-Rum", "Rumlular "],
	["Loğman", "Loğman"],
	["əs-Səcdə", "Səcdə "],
	["əl-Əhzab", "Dəstələr"],
	["Səba", "Səba "],
	["Fatir", "Yaradan "],
	["Ya sin", "Yasin"],
	["əs-Saffat", "Səf-Səf duranlar "],
	["Sad", "Sad"],
	["əz-Zumər", "Zümrələr "],
	["Ğafir", "Mömin "],
	["Fussilət", "Müfəssəl izah edilmiş "],
	["əş-Şura", "Şura "],
	["əz-Zuxruf", "Qızıl bəzəklər "],
	["əd-Duxan", "Duman "],
	["əl-Casiyə", "Diz çökmüş camaat "],
	["əl-Əhqaf", "Qumsal təpələr "],
	["Muhəmməd", "Məhəmməd"],
	["əl-Fəth", "Fəth "],
	["əl-Hucurat", "Otaqlar "],
	["Qaf", "Qaf "],
	["əz-Zariyat", "Sovurub dağıdan küləklər "],
	["ət-Tur", "Dağ "],
	["ən-Nəcm", "Ulduz "],
	["əl-Qəmər", "Ay "],
	["ər-Rəhman", "Rəhmli olan  "],
	["əl-Vaqiə", "Vaqiə "],
	["əl-Hədid", "Dəmir "],
	["əl-Mucadilə", "Mücadilə "],
	["əl-Həşr", "Toplanma "],
	["əl-Mumtəhənə", "İmtahana çəkilən qadın "],
	["əs-Saff", "Səf "],
	["əl-Cumuə", "Cümə "],
	["əl-Munafiqun", "Münafiqlər "],
	["ət-Təğabun", "Qarşılıqlı aldanma "],
	["ət-Talaq", "Boşanma "],
	["ət-Təhrim", "Qadağan "],
	["əl-Mulk", "Mülk "],
	["əl-Qələm", "Qələm "],
	["əl-Haqqə", "Haqq olan qiyamət "],
	["əl-Məaric", "Dərəcələr "],
	["Nuh", "Nuh peyğəmbər "],
	["əl-Cinn", "Cinlər "],
	["əl-Muzzəmmil", "Örtünüb bürünən "],
	["əl-Muddəssir", "Bürünüb sarınan "],
	["əl-Qiyamə", "Qiyamət "],
	["əl-İnsan", "Dövr "],
	["əl-Mursəlat", "Bir-birinin ardınca göndərilənlər "],
	["ən-Nəbə", "Böyük xəbər "],
	["ən-Naziat", "Can alanlar "],
	["Əbəsə", "Qaşqabağını tökdü "],
	["ət-Təkvir", "Sarınma "],
	["əl-İnfitar", "Parçalanma "],
	["əl-Mutaffifun", "Çəkidə aldadanlar "],
	["əl-İnşiqaq", "Yarılma "],
	["əl-Buruc", "Bürclər "],
	["ət-Tariq", "Gecə gələn "],
	["əl-Əla", "Ən uca "],
	["əl-Ğaşiyə", "Bürünən "],
	["əl-Fəcr", "Dan yeri "],
	["əl-Bələd", "Şəhər "],
	["əş-Şəms", "Günəş "],
	["əl-Leyl", "Gecə "],
	["əd-Duha", "Səhər"],
	["əş-Şərh", "Açılma"],
	["ət-Tin", "Əncir "],
	["əl-Ələq", "Laxtalanmış qan "],
	["əl-Qədr", "Qədr gecəsi "],
	["əl-Beyyinə", "Açıq-aydın dəlil "],
	["əz-Zəlzələ", "Zəlzələ "],
	["əl-Adiyat", "Qaçan atlar "],
	["əl-Qariə", "Qiyamət "],
	["ət-Təkasur", "Çoxluqla öyünmə "],
	["əl-Əsr", "Axşam çağı "],
	["əl-Huməzə", "Qeybətçi "],
	["əl-Fil", "Fil "],
	["Qureyş", "Qüreyş"],
	["əl-Maun", "Zəkat "],
	["əl-Kovsər", "Kövsər "],
	["əl-Kafirun", "Kafirlər "],
	["ən-Nəsr", "Kömək "],
	["əl-Məsəd", "Alov atası "],
	["əl-İxlas", "Səmimiyyət"],
	["əl-Fələq", "Sübh çağl"],
	["ən-Nas", "İnsanlar "],
	[]
];

//#endregion
//#region src/i18n/surah.ru.ts
const surahNamesRu = [
	[],
	["Аль-Фатиха", "Открывающая Коран"],
	["Аль-Бакара", "Корова"],
	["Аль ‘Имран", "Семейство ‘Имрана"],
	["Ан-Ниса", "Женщины"],
	["Аль-Маида", "Трапеза"],
	["Аль-Ан‘ам", "Скот"],
	["Аль-А‘раф", "Ограды"],
	["Аль-Анфаль", "Военная добыча"],
	["Ат-Тауба", "Покаяние"],
	["Юнус", "Иона"],
	["Худ", "Худ"],
	["Юсуф", "Иосиф"],
	["Ар-Ра‘д", "Гром"],
	["Ибрахим", "Авраам"],
	["Аль-Хиджр", "Хиджр"],
	["Ан-Нахль", "Пчёлы"],
	["Аль-Исра", "Ночной перенос"],
	["Аль-Кяхф", "Пещера"],
	["Марьям", "Мария"],
	["Та, ха", "Та, ха"],
	["Аль-Анбия", "Пророки"],
	["Аль-Хаджж", "Хадж"],
	["Аль-Му’минун", "Верующие"],
	["Ан-Нур", "Свет"],
	["Аль-Фуркан", "Различение"],
	["Аш-Шу‘ара", "Поэты"],
	["Ан-Намль", "Муравьи"],
	["Аль-Касас", "Рассказ"],
	["Аль-‘Анкабут", "Паук"],
	["Ар-Рум", "Ромеи"],
	["Лукман", "Лукман"],
	["Ас-Саджда", "Земной поклон"],
	["Аль-Ахзаб", "Полчища"],
	["Саба’", "Сава"],
	["Фатыр", "Зиждитель"],
	["Йа, син", "Йа, син"],
	["Ас-Саффат", "Стоящие в ряд"],
	["Сад", "Сад"],
	["Аз-Зумар", "Толпы"],
	["Гафир", "Прощающий"],
	["Фуссылят", "Разъяснены"],
	["Аш-Шура", "Совет"],
	["Аз-Зухруф", "Украшения"],
	["Ад-Духан", "Дым"],
	["Аль-Джасия", "Коленопреклонённые"],
	["Аль-Ахкаф", "Барханы"],
	["Мухаммад", "Мухаммад"],
	["Аль-Фатх", "Победа"],
	["Аль-Худжурат", "Покои"],
	["Каф", "Каф"],
	["Аз-Зарият", "Рассеивающие"],
	["Ат-Тур", "Гора"],
	["Ан-Наджм", "Звезда"],
	["Аль-Камар", "Луна"],
	["Ар-Рахман", "Милостивый"],
	["Аль-Ваки‘а", "Неизбежное"],
	["Аль-Хадид", "Железо"],
	["Аль-Муджадиля", "Препирающаяся"],
	["Аль-Хашр", "Сбор"],
	["Аль-Мумтахана", "Испытуемая"],
	["Ас-Сафф", "Ряд"],
	["Аль-Джуму‘а", "Собрание"],
	["Аль-Мунафикун", "Лицемеры"],
	["Ат-Тагабун", "Обделение"],
	["Ат-Таляк", "Развод"],
	["Ат-Тахрим", "Запрещение"],
	["Аль-Мульк", "Власть"],
	["Аль-Калям", "Перо"],
	["Аль-Хакка", "Неминуемое"],
	["Аль-Ма‘аридж", "Степени"],
	["Нух", "Ной"],
	["Аль-Джинн", "Джинны"],
	["Аль-Муззаммиль", "Закутавшийся"],
	["Аль-Муддассир", "Завернувшийся"],
	["Аль-Кияма", "Воскресение"],
	["Аль-Инсан", "Человек"],
	["Аль-Мурсалят", "Посылаемые"],
	["Ан-Наба’", "Весть"],
	["Ан-Нази‘ат", "Вырывающие"],
	["‘Абаса", "Нахмурился"],
	["Ат-Таквир", "Сворачивание"],
	["Аль-Инфитар", "Раскалывание"],
	["Аль-Мутаффифин", "Обвешивающие"],
	["Аль-Иншикак", "Разверзнется"],
	["Аль-Бурудж", "Созвездия"],
	["Ат-Тарик", "Ночной гость"],
	["Аль-А‘ля", "Всевышний"],
	["Аль-Гашия", "Покрывающее"],
	["Аль-Фаджр", "Заря"],
	["Аль-Баляд", "Город"],
	["Аш-Шамс", "Солнце"],
	["Аль-Лейль", "Ночь"],
	["Ад-Духа", "Утро"],
	["Аль-Инширах", "Раскрытие"],
	["Ат-Тин", "Смоковница"],
	["Аль-‘Аляк", "Сгусток крови"],
	["Аль-Кадр", "Величие"],
	["Аль-Баййина", "Ясный довод"],
	["Аз-Зальзаля", "Сотрясение"],
	["Аль-‘Адият", "Скачущие"],
	["Аль-Кари‘а", "Поражающее"],
	["Ат-Такясур", "Соперничество"],
	["Аль-‘Аср", "Предвечернее время"],
	["Аль-Хумаза", "Хулитель"],
	["Аль-Филь", "Слон"],
	["Курайш", "Курайшиты"],
	["Аль-Ма‘ун", "Утварь"],
	["Аль-Каусар", "Каусар"],
	["Аль-Кяфирун", "Неверующие"],
	["Ан-Наср", "Помощь"],
	["Аль-Масад", "Пальмовые волокна"],
	["Аль-Ихляс", "Очищение веры"],
	["Аль-Фаляк", "Рассвет"],
	["Ан-Нас", "Люди"],
	[]
];

//#endregion
//#region src/i18n/surah.tr.ts
const surahNamesTr = [
	[],
	["Fatiha", "Açılış"],
	["Bakara", "Sığır"],
	["Al-i İmran", "İmrân ailesi"],
	["Nisa", "Kadınlar"],
	["Maide", "Sofra"],
	["Enam", "Ehli hayvanlar"],
	["Araf", "Yüksek yerler"],
	["Enfal", "Savaş ganimetleri"],
	["Tevbe", "Tövbe"],
	["Yunus", "Peygamber Yunus"],
	["Hud", "Peygamber Hud"],
	["Yusuf", "Peygamber Yusuf"],
	["Rad", "Gök gürültüsü"],
	["İbrahim", "Peygamber İbrahim"],
	["Hicr", "Taşlı sahe"],
	["Nahl", "Bal arısı"],
	["İsra", "Geceleyin yürütmek"],
	["Kehf", "Mağara"],
	["Meryem", "Meryem"],
	["Ta Ha", "Ta-Ha"],
	["Enbiya", "Peygamberler"],
	["Hac", "Hac"],
	["Müminun", "Mü'minler"],
	["Nur", "Işık"],
	["Furkan", "Ayırmak"],
	["Şuara", "Şairler"],
	["Neml", "Karınca"],
	["Kasas", "Kıssalar"],
	["Ankebut", "Örümcek"],
	["Rum", "Romalılar"],
	["Lokman", "Peygamber Lokman"],
	["Secde", "Secde"],
	["Ahzab", "Gruplar"],
	["Sebe", "Seba"],
	["Fatır", "Yaratan"],
	["Yasin", "Yasin"],
	["Saffat", "Sıra sıra dizilenler"],
	["Sad", "Sad"],
	["Zümer", "Zümreler"],
	["Mümin", "İnanan kimse"],
	["Fussilet", "Genişçe açıklandı"],
	["Şura", "Danışma"],
	["Zuhruf", "Mücevher"],
	["Duhan", "Duman"],
	["Casiye", "Diz üstü çöken"],
	["Ahkaf", "Kum yığınları"],
	["Muhammed", "Peygamber Muhammed"],
	["Fetih", "Fetih"],
	["Hucurat", "Odalar"],
	["Kaf", "Kaf"],
	["Zariyat", "Esip savuran rüzgârlar"],
	["Tur", "Sina dağı"],
	["Necm", "Yıldız"],
	["Kamer", "Ay"],
	["Rahman", "Rahimli olan"],
	["Vakıa", "Kıyamet"],
	["Hadıd", "Demir"],
	["Mücadele", "Münakaşa etmek"],
	["Haşr", "Toplanmak"],
	["Mümtehine", "İmtihan eden"],
	["Saf", "Sıra"],
	["Cuma", "Cuma günü"],
	["Münafikun", "Münafıklar"],
	["Tegabun", "Aldanma"],
	["Talak", "Boşamak"],
	["Tahrim", "Haram kılmak"],
	["Mülk", "Mülk"],
	["Kalem", "Kalem"],
	["Hakka", "Hakk olan kıyamet"],
	["Mearic", "Yükselme yolları"],
	["Nuh", "Peygamber Nuh"],
	["Cin", "Cin"],
	["Müzzemmil", "Örtünüp bürünen"],
	["Müddessir", "Bürünüp sarınan"],
	["Kıyame", "Kıyamet"],
	["İnsan", "İnsan"],
	["Mürselat", "Gönderilenler"],
	["Nebe", "Haber"],
	["Naziat", "Ruhları çekip alan melekler"],
	["Abese", "Yüzünü ekşitti"],
	["Tekvir", "Dürmek"],
	["İnfitar", "Yarılmak"],
	["Mutaffifın", "Ölçüde hile yapan"],
	["İnşikak", "Yarılmak"],
	["Büruc", "Burçlar"],
	["Tarık", "Gece gelen"],
	["Ala", "En yüce"],
	["Gaşiye", "Kaplayıp büyüyen"],
	["Fecr", "İmsak"],
	["Beled", "Şehir"],
	["Şems", "Güneş"],
	["Leyl", "Gece"],
	["Duha", "Kuşluk vakti"],
	["İnşirah", "Açılmak"],
	["Tin", "İncir"],
	["Alak", "Kan pıhtısı"],
	["Kadir", "Kadr "],
	["Beyyine", "Apaçık delil"],
	["Zilzal", "Deprem"],
	["Adiyat", "Hızlı koşan atlar"],
	["Karia", "Çarpan"],
	["Tekasür", "Çoklukla övünmek"],
	["Asr", "İkindi vakti"],
	["Hümeze", "İnsanları arkadan çekiştiren"],
	["Fil", "Fil"],
	["Kureyş", "Qüreyş"],
	["Maun", "Yardım ve zekât"],
	["Kevser", "Bereket"],
	["Kafirun", "İnkârcılar"],
	["Nasr", "Yardım"],
	["Tebbet", "Kurusun"],
	["İhlas", "Samimi olmak"],
	["Felak", "Sabah aydınlığı"],
	["Nas", "İnsanlar"],
	[]
];

//#endregion
//#region src/i18n/getSurahNames.ts
/**

* Retrieves the list of Surah names in the specified language.

*

* @param lang - The language code for which to retrieve the Surah names

* @returns An array of Surah names in the specified language

*

* @example

* ```typescript

* const arabicNames = getSurahNames('ar');

* const englishNames = getSurahNames('en');

* ```

*/
function getSurahNames(lang) {
	return surahNames[lang];
}

//#endregion
//#region src/i18n/index.ts
const surahNames = {
	en: surahNamesEn,
	az: surahNamesAz,
	tr: surahNamesTr,
	ru: surahNamesRu
};

//#endregion
export { HizbQuarterList, JuzList, ManzilList, PageList, RukuList, SajdaList, SurahList, ayahStringSplitter, checkValidAyahId, checkValidJuz, checkValidManzil, checkValidPage, checkValidRuku, checkValidSurah, checkValidSurahAyah, findAyahIdBySurah, findJuz, findJuzAndShift, findJuzAndShiftByAyahId, findJuzByAyahId, findJuzMetaBySurah, findManzil, findManzilByAyahId, findPage, findPagebyAyahId, findRangeAroundAyah, findRangeAroundSurahAyah, findRubAlHizb, findRubAlHizbByAyahId, findRukuByAyahId, findSurahAyahByAyahId, findSurahByAyahId, getAyahCountInSurah, getAyahMeta, getAyahMetasForSurah, getJuzMeta, getList, getManzilMeta, getPageMeta, getRubAlHizb, getRubAlHizbByAyahId, getRubAlHizbMeta, getRubAlHizbMetaByAyahId, getRukuMeta, getSurahMeta, getSurahNames, isAyahJuzFirst, isAyahPageFirst, isSurahAyahJuzFirst, isSurahAyahPageFirst, isValidAyahId, isValidAyahNo, isValidJuz, isValidManzil, isValidPage, isValidRuku, isValidSurah, isValidSurahAyah, meta, nextAyah, partNames, prevAyah, string2NumberSplitter, string2NumberSplitterStrict, surahNames, surahNamesAz, surahNamesEn, surahNamesRu, surahNamesTr, surahStringParser };