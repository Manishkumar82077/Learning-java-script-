// const user ={
//     name:"amnish",
//     salary:2000,
//     welcome : function () {
//         console.log(`${this.name} user salary is${this.salary} `);
//         console.log(this);
        
//     }

// }
// user.welcome();
// user.name="himanshu"
// user.welcome();


// function chai() {
//     let username='amsnish'
//     console.log(this.usernmae);
// }
// chai()


// const chai = function chai() {
//     let username='amsnish'
//     console.log(this.usernmae);
// }
// chai()



const chai = () =>{
    let username='amsnish'
    console.log(this);
}
chai()



// const  addtwo =(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(23,26));

// ------imeplicet return ------


const  addtwo =(num1,num2)=> (num1+num2)

console.log(addtwo(23,26));

const myArray=[23,45,67,89]
myArray.forEach(()=>{})

