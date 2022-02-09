function f(){
    console.log(this);
    console.log("f is called");
}

var o = {name:"object", method:f};
f();
console.log(o.method());

function setName(name){
    this.name=name;
}
var o2 = {name:"object", method:f, setName:setName};
var o3 = {name:"", setName:setName};

o2.setName("object2");
o2.setName("object3");

console.log(o2);
console.log(o3);
console.log(o2.setName,o3.setName);