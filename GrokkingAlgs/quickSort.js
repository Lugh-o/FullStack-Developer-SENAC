array = [7, 4, 3, 4, 5, 6, 7, 8, 0];

function quicksort(array){
    if(array.length < 2) {
        return array;
    } 
        
    let pivot = array[Math.floor((array.length - 1)/2)];
    let less = [];
    let greater = [];
    let equal = [];

    for(let i = 0; i < array.length; i++){
        let current = array[i];
        if(current < pivot){
            less.push(current);
        } else if (current > pivot) {
            greater.push(current);
        } else {
            equal.push(current)
        }
    }

    return [
        ...quicksort(less),
        ...equal,
        ...quicksort(greater)
    ];
}

console.log(quicksort(array));