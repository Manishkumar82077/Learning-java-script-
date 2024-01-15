const arr=[1,2,3,4,5,6,7,8,9,10]

const myTotal = arr.reduce((acc,currval)
{
    console.log(`acc ${acc} and current value ${currval}`);
    return acc+currval;
},0)
const myTotal2 = arr.reduce((acc,currval)=>acc+currval,0)

console.log(myTotal);