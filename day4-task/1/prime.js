// //  ANONYMOUS FUNCTION

const isPrime = function(numbers) {
    if (numbers <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numbers); i++) {
        if (numbers % i === 0) return false;
    }
    return true;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17,23];
const primeNumbers = numbers.filter(function(num) {
    return isPrime(num);
});

console.log(primeNumbers);

// IIFE

let primes = (function(arr) {
    function isPrime(num) {
        if (num <= 1) return false; 
        for (let i = 2; i < num; i++) { 
            if (num % i === 0) return false; 
        }
        return true;
    }
    return arr.filter(isPrime);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,233,23,29]);

console.log(primes);