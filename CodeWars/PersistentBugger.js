function persistence(num) {
    let iteration = 0
    while(num > 9){
        iteration++
        let numArray = []
        while(num > 0){
            numArray.push(num%10)
            num = parseInt(num/10)
        }
        num = 1
        for(i = 0; i < numArray.length; i++){
            num  *= numArray[i]
        }
    }
    return iteration
}

console.log(persistence(39))
console.log(persistence(999))
console.log(persistence(4))