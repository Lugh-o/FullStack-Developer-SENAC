function dividers(num){
    let dividerList = []
    for(let i = num; i > 0; i--){
        if(num % i === 0){
            dividerList.push(i)
        }
    }
    return dividerList
}

let x = dividers(20)
console.log(x)