array = [2, 3, 5, 10, 10, 10];

function sum(array) {
    if(array.length === 1) {
        return Number(array.slice(0))
    } else if (array.length === 0) {
        return 0
    }
    return Number(array.slice(0, 1)) + sum(array.slice(1));
}

function count(array) {
    if (array.length === 0) {
        return 0
    }
    return 1 + count(array.slice(1))
}

console.log(sum(array));
console.log(count(array));