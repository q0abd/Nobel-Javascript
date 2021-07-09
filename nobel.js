let arr = ["mangoA", "abrikos", "ANANAS"];

let findletter = "n";

arr.forEach((string, pos) => {
    let count = 0;
    for(let i = 0; i < string.length; i++){
       if(string[i].toLowerCase() === findletter.toLowerCase()){
        count++;
       } else {
        continue;
       }
    }
    console.log(pos," elementida ",count," ta `a` harfi mavjud!");
});





// let arr = ['apple', 'Grape', 'Ananas', 'Fruits', 'Cherry', 'Strawberry']
// var add = arr.join()
// let str = add.match(/a/gi)
// if(str==null) {
//     console.log('Jami (G):',0)
// } else {
//     console.log('Jami (a):', str.length)
// }
// let str1 = add.match(/n/gi)
// if(str1==null) {
//     console.log('Jami (a):',0)
// } else {
//     console.log('Jami (n):', str1.length)
// }

//     arr.map((value)=>{
//         var add = arr.join()
//         let str1 = add.match(/a/gi)
//         console.log(value);
//     }) 
// console.log(typeof str1);

// for(let i=0; i<arr.length; i++) {
// }
// var str = "The rain in SPAIN stays mainly in the plain"; 
// var res = str.match(/ain/gi);
// console.log(res);