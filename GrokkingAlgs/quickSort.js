array = [8, 3, 5, 10, 7, 20];

function quicksort(array){
    console.log("----------");
    console.log(array);

    if(array.length < 2) {
        return array
    } 

    pivotIndex = Math.round((array.length - 1)/2);
    pivot = array[pivotIndex];
    tempArray = array.slice(0, pivotIndex).concat(array.slice(pivotIndex+1));
    
    less = [];
    for(let i = 0; i < tempArray.length; i++){
        if(tempArray[i] <= pivot){
            less.push(tempArray[i]);
        }
    }

    greater = []
    for(let i = 0; i < tempArray.length; i++){
        if(tempArray[i] > pivot){
            greater.push(tempArray[i]);
        }
    }

    console.log(tempArray);
    console.log(less);
    console.log(pivot);
    console.log(greater);
    
    // return [].concat(quicksort(less), pivot, quicksort(greater))
}

console.log(quicksort(array));