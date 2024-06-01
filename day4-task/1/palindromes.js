// ANONYMOUS FUNCTION

let arr=["mom","dad","malayalam","racecar","helloworld","deed","goods","shopping"];

const palin=function(arr){
    let palindrom = [];
    
    for(let i=0 ; i < arr.length ; i++){
            let reversed=arr[i].split('').reverse().join('');
            
             if(arr[i]===reversed)
                {
                    palindrom.push(arr[i]);
                }
        }
        return palindrom;
    }
console.log(palin(arr));


// IIFE


const pali=(function(arr1){
    let palindrom = [];
    
    for(let i=0 ; i < arr1.length ; i++){
            let reversed=arr1[i].split('').reverse().join('');
            
             if(arr1[i]===reversed)
                {
                    palindrom.push(arr1[i]);
                }
        }
        return palindrom;
    })(["malayalam","racecar","helloworld","wow"]);
    console.log(pali)