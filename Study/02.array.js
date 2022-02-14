const arr1 = new Array();
const arr2 = [];
const arr3 = [1,2,3,4,5];
const arr4 = new Array(5);//정적할당

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

const arr5 = new Array(5).fill(5);
console.log(arr5);

//v = 배열의 값, k = 배열의 인덱스, 첫번째 인수 = 배열의 크기
const arr6 = Array.from(Array(5), function(a, k){
    return k+1;
})
console.log(arr6);

console.log(arr6.length);

//배열을 하나의 문자열로 합치는 경우,
const arr = [1,2,3,4,5,6];
//join
console.log(arr.join(", "));

//reverse
console.log(arr.reverse());
console.log(arr)

const arrr = [1,2,3,4,5];
console.log(arrr.concat(arr));

//배열 추가 삭제
//push pop
const a = [1,2,3,4,5,6];
a.push(7);
a.push(8,9,20);
console.log(a);

a.pop();
a.pop();
console.log(a.pop());

///index 제어 - 첫번째 인덱스 제어
//shift, unshift
const b = [1,2,3,4,5];
b.shift(); //0
b.shift(); //1
console.log(b);
b.unshift(10);
console.log(b);

//배열 중간을 잘라 값을ㄹ 알고 싶다면?
//slice
const c = [1,2,3,4,5,6];
console.log(c.length);
console.log(c.slice(2,4));
console.log(c);
console.log(c.splice(2,2));
console.log(c);

for(let i=0; i<c.length; i++){
    console.log(c[i]);
}

console.log(c);

//for of
for(const item of c){
    console.log(item);
}

//배열은 객체와 타입이 동일
console.log(typeof c);

//객체처럼 사용하기
c['key'] = "value";
console.log(c)
console.log(c.length); //배열의 길이는 변화없음.- 내부에 알아서 관리되기 때문에 변화없음.