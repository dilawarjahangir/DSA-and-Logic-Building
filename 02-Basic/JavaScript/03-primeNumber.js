function isPrimeNumber(number) {
    if (number <= 1) {
        return false; 
    }
    for (let i = 2; i <= number-1; i++) {
        if (number % i === 0) {
            return false; 
        }
        console.log(i)
    }

    return true;  
}

// Example usage
console.log(isPrimeNumber(41));  // Output: true
// console.log(isPrimeNumber(10)); // Output: false
