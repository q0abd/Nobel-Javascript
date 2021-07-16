let arr = [
    {
        name:`Abdulloh`,
        id:1,
        salary:5000,
        age:17
    },
    {
        name:`QAbdulloh`,
        id:2,
        salary:4000,
        age:6
    },
    {
        name:`VAbdulloh`,
        id:3,
        salary:3000,
        age:23
    },
    {
        name:`DAbdulloh`,
        id:4,
        salary:2000,
        age:33
    },
    {
        name:`JAbdulloh`,
        id:5,
        salary:1000,
        age:15
    },
]

function slaryFunc(){
    let count = 0
    arr.filter((value)=>{
        if(value.age>15){
            count+=value.salary
        }
    })
    console.log(count);
}

slaryFunc()
// function slaryFunc(){
//     arr.reduce((value)=>{
//         if(value.age>15){
//             console.log( value.salary);
//         }
//     },0)
//     console.log(arr);
// }

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15
