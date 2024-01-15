// for of loop 
// const arr=[12,23,44,56,778,899,34,76,4,33]
// for (const num of arr) {
//     console.log(num);
// }


const greeting="hello_world!"
for (const greet of greeting) {
    console.log(`Each chsr in ${greet}`);
}



// MAP

const map = new Map()
map.set('in',"india")
map.set('fr',"france")
map.set('usa',"united state of america ")

console.log(map);

for (const [key,value] of map) {
    console.log(key,";-",value);
}


const myobject ={
    "game1":"pubg",
    "game2":"rugbi",
    "game3":"kabbadi"
}
for (const [key,value] of myobject) {
    console.log(key,":-",value);
}