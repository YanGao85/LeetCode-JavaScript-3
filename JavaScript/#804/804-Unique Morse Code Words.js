/**
 * @param {string[]} words
 * @return {number}
 */

/* 字母 a~z 對應到的 Morse Code */
const LetterList = [
	'.-',
	'-...',
	'-.-.',
	'-..',
	'.',
	'..-.',
	'--.',
	'....',
	'..',
	'.---',
	'-.-',
	'.-..',
	'--',
	'-.',
	'---',
	'.--.',
	'--.-',
	'.-.',
	'...',
	'-',
	'..-',
	'...-',
	'.--',
	'-..-',
	'-.--',
	'--..',
];
var uniqueMorseRepresentations = function(words) {
	/* 對 words 跑 reduce, 建立預設結果為 obj */
	var objRes = words.reduce(function(res, val, index) {
		/* 欲組成該單字的摩斯密碼的字串 */
		let strMorse = '';

		/* 對單字的每個字跑for迴圈 */
		for (let i = 0; i < val.length; i++) {
			/* 取得該字母 val[i] 對應到 LetterList 的位置 
			   使用 charCodeAt() 以得到單字的 Unicode
			   因題目聲明單字必為小寫, 而a-z 為97-112
			   故減去 97 後則為其L etterList 上的對應位置 */
			let indexLetter = val[i].charCodeAt() - 97;

			/* 將其摩斯密碼組合 */
			strMorse += LetterList[indexLetter];
		}
		// 對 res 新增一個 properties, key = strMorse, val = true
		// 這樣下次有一樣的 strMorse 時, 便不會在新增一個properties
		res[strMorse] = true;

		return res;
	}, {}); // 初始化值為 {}
	/* 將 objRes 使用 Object.keys(), 取得其 property 的 array, 並將其長度回傳*/
	// (2) ["--...-.", "--...--."]
	return Object.keys(objRes).length;
};
