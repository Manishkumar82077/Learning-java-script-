const marvel_hero=["spider_man","ironman","thor"];
const dc = ["batman","superman","superwomen"]
// concate operater :
// const all_hero=marvel_hero.concat(dc)
// console.log(all_hero)

//output:  [ 'spider_man', 'ironman', 'thor', 'batman', 'superman', 'superwomen' ]

// marvel_hero.push(dc)
// console.log(marvel_hero)
/* [
  'spider_man',
  'ironman',
  'thor',
  [ 'batman', 'superman', 'superwomen' ]
]
*/

// spred operater in array 



// const all_hero_new=[...marvel_hero,...dc]
/*
[ 'spider_man', 'ironman', 'thor', 'batman', 'superman', 'superwomen' ]
// */


// const mix = [2,3,4[4,5,67,34,5],22,[3,4,5],7,4,5];//removeving all array one line aaray
// const real_another_array=mix.flat(Infinity);
// console.log(real_another_array)

console.log(Array.isArray("manish_kumar"));
console.log(Array.from("manish_kumar"))
console.log(Array.from({name:"manish"}))
// craete Array from the string and check is array or not 

// convert set of element into Array 
let score_01=100;
let score_02=200;
let score_03=300;
console.log(Array.of(score_01,score_02,score_03));
