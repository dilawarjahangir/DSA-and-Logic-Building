function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) { 
        let mid = Math.floor((start + end) / 2);
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
}

const arr = [10, 20, 30, 40, 50, 60, 70];

console.log(binarySearch(arr, 60));
console.log(binarySearch(arr, 75));
