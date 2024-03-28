array = [2, 3, 7, 9, 13, 29, 30, 45, 87, 99, 120, 123, 124, 450];

function sum(array) {
    temp = array.map((x) => x);
    if(temp.length === 1) {
        return temp.pop()
    } else if (temp.length === 0) {
        return 0
    }
    return temp.pop() + sum(temp);
}

function count(array) {
    temp = array.map((x) => x);
    if (temp.length === 0) {
        return 0
    }
    temp.pop();
    return 1 + count(temp)
}

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

// console.log(sum(array));
// console.log(count(array));
console.log(binarySearchRec(9, array, 0, array.length - 1));
// console.log(binSearch(9, array))
