
let arr = [
    {
        id: 6,
        name: `Abdulloh`,
        age: 34,
    },
    {
        id: 3,
        name: `Shaxzod`,
        age: 11,
    },
    {
        id: 4,
        name: `Ahror`,
        age: 14,
    }
]
arr.map((value)=>{
  value.surname = `abd`
console.log(value)
})
arr.sort((a,b)=>a.age-b.age)
arr.sort((a,b)=>a.id-b.id)
arr.sort((a,b)=>a.name-b.name)
console.log(arr);