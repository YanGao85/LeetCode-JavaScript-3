/**
 * @param {string} s
 * @return {number}
 */
/**
 * Manacher's Algorithm 
 * 還沒搞懂 好難
 */
var countSubstrings = function(s) {
    s = preprocess(s);
    console.log(s);
	let result = 0;
	for (let i = 0; i < s.length; i++) {
		let j = 0;
		while (j < s.length - i && i >= j && s[i + j] === s[i - j]) {
			//console.log(j);
			j++;
        }
        console.log('j/2: ', Math.trunc(j / 2));
        result += Math.trunc(j / 2);
        console.log(result);
	}
	return result;
};

var preprocess = function(s) {
	return '#' + s.split('').join('#') + '#';
};

console.log(countSubstrings('12212321'));
