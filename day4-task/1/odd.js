// ANONYMOUS FUNCTION

let arr=[1,2,3,4,5,6,7,8,9,10,11,1121,12,1234,323,31,12,14];
const odd=function(num)
{
    let oddnumber=[];
    for(let i=0;i<num.length;i++)
        {
            if(num[i]%2!=0)
                {
                    oddnumber.push(num[i]);
                }
               
                }
                return oddnumber;
    }
        console.log(odd(arr));


// IIFE


const odds=(function(num)
{
    let oddnumber=[];
    for(let i=0;i<num.length;i++)
        {
            if(num[i]%2!=0)
                {
                    oddnumber.push(num[i]);
                }
               
                }
                return oddnumber;
    })([1,2,3,4,5,6,7,8,9,10,22,11,13,111,133,23,34,23]);
        console.log(odds);
