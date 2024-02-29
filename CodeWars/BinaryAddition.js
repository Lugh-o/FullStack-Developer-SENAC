function addBinary(a,b) {
    let sum = a + b
    binArray = []
    while(sum > 0){
        binArray.push(sum % 2)
        sum = parseInt(sum / 2)
    }
    return binArray.reverse().join("")
}

console.log(addBinary(5,4))