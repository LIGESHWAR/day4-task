// ANONYMOUS FUNCTION

function duplicate(arr){
    return Array.from(new Set(arr));
}

const arr=[1,2,3,4,5,6,1,2,3,4,5,6];
const unique=duplicate(arr);

console.log(unique);

// IIFE

const dup=(function duplicate(arr){
    return Array.from(new Set(arr));
})([1,2,3,4,5,6,1,2,3,4,5,6,9,8])
console.log(dup);
