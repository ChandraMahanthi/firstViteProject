let arr = [
    {
        name:"a",
        gender:"aa"
    },
    {
        name:"b",
        gender:"bb"
    },
    {
        name:"c",
        gender:"cc"
    },
    {
        name:"d",
        gender:"dd"
    },
]
let abc = arr.map((element)=>{return element.name + element.gender})


function take({param})
{
   return param
}

take(abc)

