function solution(str, ending){
    strArray = str.split("").reverse()
    endingArray = ending.split("").reverse()
    for(i = 0; i < endingArray.length; i++){
        if(endingArray[i] == strArray[i]){
            continue
        }
        return false
    }
    return true
}

console.log(solution("abc", "bc"))
console.log(solution("abc", "d"))