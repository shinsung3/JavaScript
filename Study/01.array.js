//빈 array를 생성
let arr1 = [];
console.log(arr1);

//2. 미리 초기화된 array를 생성
let arr2 = [1,2,3,4,5];
console.log(arr2);

//3. 같은 값으로 초기화
let arr3 = Array(10).fill(1);
console.log(arr3);

//4. 특정 로직을 사용하여 초기화.
let arr4 = Array.from({length:100}, (_,i)=>i);
console.log(arr4);


///배열 요소 추가, 삭제
const arr5 = [1,2,3];
console.log(arr5);

arr5.push(4); //O(1)
arr5.push(5,6);//O(1)
arr5.splice(3,0,128) //O(n)
console.log(arr5);

//3번 인덱스 값 삭제
arr5.splice(3,1); //O(n);
console.log(arr5);

const arr6 = [];
console.log(arr6);
arr6.push(1);
arr6.push(2);
arr6.push(3);
arr6.push(1);
arr6.push(1);
arr6.push(1);
console.log(arr6);

console.log(arr6.length);

arr6["string"] = 10;
arr6[false] = 0;
console.log(arr6);
console.log(arr6.length);
arr6[4] = 5;
console.log(arr6.length);