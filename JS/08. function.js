function print(msg){
    console.log("in");
    console.log(msg);
    console.log("out");
}

function sum(arg1, arg2){
    var result = arg1 + arg2;
    return result;
}

function returnTest(){
    return;
    console.log("실행되지 않음");
}

print("안녕하세요.");
var answer = sum(1,2);
console.log(answer);
returnTest();