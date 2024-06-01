// ARROW FUNCTION

let arr=[1,2,3,4,5,6,7,8,9,10,11,111];
const odd=(num)=>
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
