function solution(s){
    const stack = [];

    for(const c of s){
        if(c==="("){
            stack.push(c);
        }else{
            if(stack.length===0){
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));