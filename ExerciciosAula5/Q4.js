let numbers = [-29, -8, -7]
let highest = -Number.MAX_VALUE

for(i = 0; i < numbers.length; i++){
    if(numbers[i] > highest){
        highest = numbers[i]
    }
}
console.log(`O número ${highest} é o maior`)