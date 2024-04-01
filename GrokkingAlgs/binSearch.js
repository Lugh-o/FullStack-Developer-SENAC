array = [2, 3, 7, 9, 13, 29, 30, 45, 87, 99, 120, 123, 124, 450];

function binSearch(num, array) {
    high = array.length - 1
    low = 0

    while(low <= high){
        mid = high + low
        guess = array[mid]
        if (guess === num) {
            return mid
        } else if(guess > num) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return null
}

function binarySearchRec(num, array, low, high){
    mid = high + low
    guess = array[mid]
    
    if (low > high){
        return null
    } else if (guess === num) {
        return mid
    } else if (guess > num) {
        high = mid - 1
    } else {
        low = mid + 1
    }
    return binarySearchRec(num, array, low, high)
}

console.log(binarySearchRec(9, array, 0, array.length - 1));
// console.log(binSearch(9, array))
