// number 자료형
/*

- Number
숫자를 나타내는 자료형
64bit로 실수와 정수 모두 표현 가능
정상적이지 않는 숫자나 표현할 수 없는 범위의 수를 표시하는 NaN, Infinity

- parseInt, parseFloat 명령어
문자열 "1" 과 1 은 다름
명령어 뒤에 따라오는 괄호 안에 있는 문자열의 앞에서부터 Number를 인식함
*/

var a = 100;
var b = 3.14;
var c = 1e-3;
console.log(c);

var height = "165.4";

var height_int = parseInt(height);
console.log(height_int);

var height_float = parseFloat(height);
console.log(height_float);

var d = 1/0;
console.log(d); //Infinity - 나타날 수 없는 숫자가 나타날때.

var weight = "50입니다.";
var weight_int = parseInt(weight);
console.log(weight_int);

var str="3.141592는 Pi의 근사값입니다."
var pi_int = parseInt(str);

console.log("pi_int의 값은", pi_int, "입니다." );