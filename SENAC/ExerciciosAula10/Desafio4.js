function isDivisibleby3and5(num){
    num = parseInt(num)
    if(num % 3 === 0 && num % 5 === 0){
        return true
    }
    return false
}

console.log(isDivisibleby3and5(16));