// ARROW FUNCTION

const isPrime =(n)=> {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17,23,27,29];
const primeNumbers = numbers.filter(function(num) {
    return isPrime(num);
});

console.log(primeNumbers);