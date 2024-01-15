const prog=["js","py","cpp","rb"]
// prog.forEach(function (item) {
//     console.log(item);
// } );

prog.forEach((item,index,prog)=>{
    console.log(item,index,prog);
}
)
// prog.forEach(printMe)

// function printMe(itemlog) {
//     console.log(itemlog);
// }


const mtlang=[
    {
        lagNmae :"python",
        lagFile:"py"
    },
    {
        lagNmae :"javaScrit",
        lagFile:"js"
    },
    {
        lagNmae :"C++",
        lagFile:"cpp"
    },
    {
        lagNmae :"HTML",
        lagFile:"html"
    }
]
mtlang.forEach((item)=>{
    console.log(item.lagFile,"-->",item.lagNmae);
})