function isPrimeNumber(number) {
    if (number <= 1) {
        return false; 
    }

    for (let i = 2; i <= number-1; i++) {
        if (number % i === 0) {
            return false; 
        }
    }

    return true; 
}

function printPrimesInRange(start, end) {
    for (let number = start; number <= end; number++) {
        if (isPrimeNumber(number)) {
            console.log(number);  
        }
    }
}


printPrimesInRange(10, 50);
