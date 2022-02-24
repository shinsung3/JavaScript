function solution(s){
    var answer = true;
    const stack = [];

    for (let index = 0; index < s.length; index++) {
        stack.push(s[index]);
    }

    var cnt = 0;
    while(stack.length>0){
        const value = stack.pop();
        // console.log(value)
        if(value == "("){
            cnt--;
        }else {
            cnt++;
        }
        if(cnt<0){
            answer = false;
            break;
        }
    }

    if(cnt!=0){
        answer = false;
    }

    return answer;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));