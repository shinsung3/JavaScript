var arr = [];
var arr2 =[1,2,3,4,5];

console.log(arr);
console.log(arr2);

var mixed_arr = [1, true, 3.14, "string", {name:"object"}, [1,2,3]];
console.log(mixed_arr);
console.log(mixed_arr.length);
console.log(arr.length);

console.log(arr[0]); //undefined
console.log(arr2[3]);
console.log(mixed_arr[4]);

arr2.pop();
console.log(arr2);
arr2.shift();
console.log(arr2);
arr2.push(6);
console.log(arr2);
arr2.unshift(0);

console.log(arr2);
arr2.unshift(10000);
console.log(arr2);

arr2.sort();
console.log(arr2);
var arr1= [1,2,3];
var arr3 = [4,5,6];
var arr4 = arr1.concat(arr3);
console.log(arr1.concat(arr3));
console.log(arr4);

var arr5 = [1,2,3,1,2,3];
console.log(arr5.indexOf(2));
console.log(arr5.lastIndexOf(2));

var str = "1,2,3,4,5";
console.log(str.split(","));