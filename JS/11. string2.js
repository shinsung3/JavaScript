var str = "Hello";
console.log(str.length);
console.log(str["length"]);
var str2 = " World";
console.log(str.concat(str2));
var str3 = str.concat(str2);
console.log(str3);
console.log(str3.concat(" !!!!"));
console.log("Hello".concat(" World").concat(" **()"))
console.log("Hello".length);

console.log(str+str3);
console.log("Pi is "+3.14);
console.log(3.14+" is Pi");


var str3 = "abcdeabced";
console.log(str3.charAt(0));
console.log(str3.charAt(10)); //빈 문자열
console.log(str3.charAt(9));
console.log(str3.length);
console.log(str3.charAt(-1));
console.log(str3[1]);
console.log(str3[10]);//undefined
console.log(str3.substring(2,4));
console.log(str3.substring(2));
console.log(str3.indexOf("b"));
console.log(str3.indexOf("bc"));
console.log(str3.indexOf("ca")); //존재하징않으면 -1

