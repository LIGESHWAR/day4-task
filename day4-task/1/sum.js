// ANONYMOUS FUNCTION

let arr=[1,2,3,4,5,6,7,8,9,10]
const sumof=function(num)
{
    let val=0;
    for(i=0;i<num.length;i++)
        {
            val=val+num[i];

        }
        return val;
    }

    let sum=sumof(arr);
    console.log(sum)

// IIFE

const sumof1=(function(num)
{
    let val=0;
    for(i=0;i<num.length;i++)
        {
            val=val+num[i];

        }
        return val;
    })([1,2,3,4,5,6,7,8,9,10,11,23,45,786,4,3,23]);

    console.log(sumof1)