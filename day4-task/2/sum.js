//ARROW FUNCTION

let arr=[1,2,3,4,5,6,7,8,9,10,11,12,2,3,4,5,];
const sumof=(num)=>
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