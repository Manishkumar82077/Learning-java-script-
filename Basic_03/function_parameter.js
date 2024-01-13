// // function sayMyName(){
// //     console.log();
// // }
// // sayMyName--> function name 
// //(----) => function parameter

// // function AddToNumber(number1,number2) {
// //     return number1+number2;
// // }
// // let result=AddToNumber(23,234)
// // console.log(result);

// function loginuserMessage(username) {
//     if(!username){
//         console.log("please enter the name : ")
//         return
//     }
//     else{
//         console.log(`${username} just logged in`)
//         return
//     }
//     return 
// }
// loginuserMessage("manish");

// function CalculatePrice(...num1) {
//     return num1
// }
// console.log("sum of price is : "+CalculatePrice(23,23,4,5,6,7,8,6,5,4,));

const user ={
    UserName:"manish_kumar",
    price :999
}
function haldleObject(anyobject) {
    console.log(`user name is ${anyobject.UserName} and rice is ${anyobject.price} `);
}
haldleObject(user)
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
