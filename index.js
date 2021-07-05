// ABS
// let a = [`BAC`]
// let b = [`ABC`]
// let old = a+b
// function luboy(){
//     for (var i = 0; i < old.length; i++) {
//         if(old.includes(`A`))
//         console.log(true)
//     }
//     console.log(luboy());
// }
// for(i=0;i<old.length;i++){
// }


// var a = [`ABC`,`BCA`]
// let a = `ABC`
// let b = `CAB`
// let nav = a+b
// function nom(nav){

//     if(nav.includes(`A`)){
//         console.log(true);
//     }else{
//         console.log(false)
//     }
// }
// console.log(nav)


let a = `abc`
let b = `Abc`
a.length===b.length && a.split('').sort().join()===b.split('').sort().join() ? console.log(true) : console.log(false);


var arr = [32,12,13,4,9,2,1,19,23,59,20,48,34];
function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

  for (let index = 0; index < arr.length; index++) {
     
    if(isPrime(arr[index])){

        console.log(arr[index])
    }
      
  }