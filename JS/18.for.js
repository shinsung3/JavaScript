var array = [1,2,3,4,5,5,6,7,8,9,10];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(array[index]);
}

var obj = {
    name:'object',
    weight:30,
    isObject:true,
    arr:[1,2,3],
    obj:{who:"second"}
};

var property_list = Object.keys(obj);
console.log(property_list);

for (let index = 0; index < property_list.length; index++) {
    const element = property_list[index];
    console.log("\t", element, ": ", obj[element]);
}
console.log("for In 구문");
for (var propertyName in obj) {
    console.log("\t",propertyName, ": ", obj[propertyName]);
}