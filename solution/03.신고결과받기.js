function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);

    //1. 개수를 알아야 함, 중복이면 1개만 저장
    var set_report = new Set();
    for(var i=0; i<report.length; i++){
        set_report.add(report[i]);
    }

    //2. 누구 쫓아낼지 찾기
    var count_map = new Map();
    for(var i =0; i<id_list.length; i++){
        count_map.set(id_list[i], 0);
    }
    for (var set_value of set_report){
        var id = set_value.split(" ")[0];
        var target = set_value.split(" ")[1];
        var count = count_map.get(target)+1;
        count_map.set(target, count);
    }

    // console.log(count_map)

    var find_target=[];
    for(var [key, value] of count_map){
        if(value >= k){
            find_target.push(key);
        }
    }
    // console.log(find_target);
    if(find_target.length >0){
        var ans = new Map();
        for(var i =0; i<id_list.length; i++){
            ans.set(id_list[i], 0);
        }

        for (var set_value of set_report){
            var id = set_value.split(" ")[0];
            var target = set_value.split(" ")[1];
            for(var j=0; j<find_target.length; j++){
                if(target==find_target[j]){
                    var data = ans.get(id)+1;
                    ans.set(id, data);
                }
            }
        }
        var idx=0;
        for(var [key, value] of ans){
            answer[idx] = value;
            idx++;
        }
    }

    return answer;
}
const id_list =["muzi", "frodo", "apeach", "neo"]
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
const k = 2;
console.log(solution(id_list, report, k));