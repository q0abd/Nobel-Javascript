let school = [
    {
        name:`ZAbduqahhor`,
        salary:2100,
        grade:1,
        age:31,
        status:`webdev`
    },
    {
        name:`AIslom`,
        salary:4300,
        grade:4,
        age:23,
        status:`webdev`
    },
    {
        name:`Qarvar`,
        salary:3200,
        grade:2,
        age:11,
        status:`webdev`
    },
    {
        name:`Ilhom`,
        salary:2300,
        grade:3,
        age:15,
        status:`webdev`
    }
]
// console.log(school[0].salary);

function salaryFunc(zarplata) {
    let summa = 0
    if (zarplata === `salaryIsHere`) {
            school.forEach((value)=>{
                if (value.age>=16) {
                    summa+=value.salary
                }
            })
            console.log(summa);
        }
    }
salaryFunc(`salaryIsHere`)

    // function slaryFunc(){
    //     let count = 0
    //     arr.filter((value)=>{
    //         if(value.age>15){
    //             count+=value.salary
    //         }
    //     })
        // console.log(count);
    // }

function callId(imhere) {
    if(imhere === `idHere`){
        school.forEach((value,index)=>{
            value.id = index
        })
    }
    // console.log(school);
    if (imhere === `sortNames`) {
            console.log(school.sort((a,b)=>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            );
        }
    if (imhere === `sortAge`) {
        console.log(
            school.sort((a,b)=>a.age-b.age)
        );
    }
}

    // callId(`idHere`)
    // callId(`sortNames`)
    // callId(`idHere`)
    // callId(`sortAge`)

