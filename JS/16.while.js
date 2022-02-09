const readline = require('readline');

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("1. 아이스크림");
console.log("2. 과자");
console.log("3. 카페라떼");
console.log("4. 티");

var choice = [];
var count = 0;
rl.on("line", function(line){
    choice = line.split(' ').map((el) => parseInt(el));
    rl.close();
})
rl.on("close", function(){
    console.log(choice);
    while(count<3){
        switch(choice[count]){
            case 1:
                console.log("1. 아이스크림 3000원");
                break;
            case 2:
                console.log("2. 과자 4000원");
                break;
            case 3:
                console.log("3. 카페라떼 5000원");
                break;
            case 4:
                console.log("4. 티 6000원");
                break;
        }
        count++;
    }
})