//ANONYMOUS FUNCTION

const findMedianSortedArrays = function (arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let mid = merged.length / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
};

let array1 = [1,2,3,4];
let array2 = [6,6,7,8];

let median = findMedianSortedArrays(array1, array2);
console.log(median);

//IIFE

const findMedianSortedArrays1 = (function (arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let mid = merged.length / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
})(arr1=[1,2,3,4],arr2=[5,6,7,8]);

console.log(findMedianSortedArrays1);
