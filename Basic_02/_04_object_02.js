// object singleton
// const tinderuser = new Object()

const tinderuser = {};

// console.log(tinderuser)

tinderuser.id = "123abc";
tinderuser.name = "Manish_Kumar";
tinderuser.isLogIn = false;

// console.log(tinderuser);

const regularuser = {
    email: "manish_kumar@9855",
    fullname: {
        userFullNmae: {
            firstnmae: "manish",
            lastName: "kumar"
        }
    }
};

// console.log(regularuser);

const users = [
    {
        id: 1,
        email: "amanish_01@gmail.com"
    },
    {
        id: 2,
        email: "amanish_02@gmail.com"
    },
    {
        id: 3,
        email: "amanish_03@gmail.com"
    }
];

// console.log(users[1].email);
//  console.log(Object.keys(tinderuser));//[ 'id', 'name', 'isLogIn' ]
// console.log(Object.values(tinderuser));//[ '123abc', 'Manish_Kumar', false ]
// console.log(Object.entries(tinderuser));
/*[
  [ 'id', '123abc' ],
  [ 'name', 'Manish_Kumar' ],
  [ 'isLogIn', false ]
]
  */
// console.log(tinderuser.hasOwnProperty("isLogIn"));

const course = {
    coursenmae: "js in hindi",
    price: "999",
    couseInstructure: "hitesh"
}

const { couseInstructure: instructor } = course;

console.log(instructor); // This will log "hitesh" to the console


const obj1 = {
    1:"a",
    2:"b"
}

const obj2 ={3:"c",4:"b"}
const obj3 ={5:"e",6:"f"}

//assign 2 object to the new obj that store in obj3

// const obj3 = Object.assign({},obj1,obj2);

// spreed the obj 
const obj4 = {
    ...obj1,...obj2,...obj3
}
console.log(obj4);
