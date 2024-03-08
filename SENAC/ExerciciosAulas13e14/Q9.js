function mySort(array){
    let sorted = []

    for(let i = 0; i < array.length; i++){
        let current = array[i]

        if(sorted.length === 0){
            sorted.push(current)

        } else{
            for(let j = 0; j <= sorted.length; j++){
                if(current > sorted[j]){
                    continue
                }
                sorted.splice(j, 0, current)
                break
            }
        }
    }
    return sorted
}

function myBetterSort(array){
    for(let j = 0; j < array.length; j++){
        for(let i = 0; i < array.length; i++){
            let temp = array[i]
            if(array[i] > array[i+1]){
                array[i] = array[i+1]
                array[i+1] = temp
            }
        }
    }
    return array
}

let numbers = [11, 0, 2, 9, 8, 7, 3, -3, 4, -8, 10, 12, 65, 1, 5, 6]
console.log(myBetterSort(numbers))

