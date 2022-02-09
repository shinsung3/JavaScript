var empty = {};
console.log(empty);
console.log(typeof(empty));

//name, age, height - 속성
var man = {name: "홍길동", age:20, height:180};
console.log(man);

console.log(man.name);
console.log(man["name"]);

man.name = "임꺽정";
console.log(man.name);
console.log(man["name"]);

man["age"]=45;
console.log(man);