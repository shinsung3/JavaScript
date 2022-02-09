const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var ans;
rl.on("line", function(line){
    //퀴즈
    ans = Number(line);
    // do{
    //     console.log("1+1?");
    // }while(ans != 2);
    // console.log("맞췄습니다.");
    rl.close();

})

var cond = false;
while(cond){
    console.log("실행 x");
}
do{
    console.log("실행 o");
}while(cond);

