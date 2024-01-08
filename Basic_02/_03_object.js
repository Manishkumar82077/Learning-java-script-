// type of object 
// 1.singleton   only one object of that type   nake fron constracture  
// Object.create
//  2.object literal    muliple object create same type 
const mysym= Symbol("key")

const JsUser = {
    name: "hitesh",
    "fullname":"manisH_kumar",
    [mysym]:"mynmae",
    age: 18,
    email:"manish2gmail.com",
    isLogIn:true,
    lastLogInDate:['Monday','Saturday']
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
// console.log(JsUser[mysym])

// update object value 
// console.log(JsUser.email);
// JsUser.email="cu_9855@cuchd.in"
// console.log(JsUser.email);
// frezzing object
// Object.freeze(JsUser)
// JsUser.email="cu_9856@cuchd.in"
// console.log(JsUser.email);
//  console.log(JsUser)

JsUser.greeting = function () {
    console.log(`hello to object tutotial ,${this.name} !`);
}
// console.log(JsUser);
console.log(JsUser.greeting);//only  get refrerance 
console.log(JsUser.greeting());//only  get refrerance 


