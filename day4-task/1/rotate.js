// // ANONYMOUS FUNCTION

const rotateArray =function (arr, k) {
    k = k % arr.length;

    if (k === 0) 
        return arr;

    let endPart = arr.slice(-k); 
    let startPart = arr.slice(0, arr.length - k); 
    
    return endPart.concat(startPart);
}

let arr = [1, 2, 3, 4, 5]; 
let k = 1; 
let rotatedArray = rotateArray(arr, k); 

console.log(rotatedArray);


// IIFE
let arr1=[1,2,3,4,5];
let a=3;
const rotateArray1=function() {
    a = a % arr1.length;

    if (a === 0) 
        return arr1;

    let endPart = arr1.slice(-a); 
    let startPart = arr1.slice(0, arr1.length - a); 

    return endPart.concat(startPart);
}(arr1, a);
 
console.log(rotateArray1);