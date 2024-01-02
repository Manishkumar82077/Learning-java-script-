const myArr= [2,3,4,5,6,7]
const myArray=new Array(1,2,3,4,5,6,7)

console.log(myArray[1])
myArray.pop(4)
myArray.push(7)
myArray.shift(6)

// slice vs splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);