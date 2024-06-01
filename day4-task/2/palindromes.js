//ARROW FUNCTION

let arr=["noon","civic","level","god","bad"];

const palin=(arr)=>{
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
