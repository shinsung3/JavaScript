function makeCounterFunction(initVal){
    var count = initVal;
    function Increase(){
        count++;
        console.log(count);
    }
    return Increase;
}

var count1 = makeCounterFunction(0);
var count2 = makeCounterFunction(10);

count1();
count2();