// 1
function roundType(number){
    number *= 10
    let a = parseInt(number/10)
    let b = number%10
    if(b>5){
        return a+1
    }return a
}
console.log(roundType(12.3));



// 2
function powType(number,son){
    return number**son
}
console.log(powType(2,2))



// 3
function sqrtType(number){
    return number**0.5
}
console.log(sqrtType(25))



// 4
function absType(number){
    if(number<0){
        return number*(-1)
    }else{
        return number
    }
}
console.log(absType(-34));



// 5
function ceilType(number){
    number *= 10
    let a = parseInt(number/10)
    let b = number%10
    if(b<=9){
        return a+1
}return a
}
console.log(ceilType(4.1))


// 6
function floorType(number){
    number *= 10
    let a = parseInt(number/10)
    let b = number%10
    if(b>9){
        return a+1
}return a
}
console.log(floorType(4.9))



// 7
function minType(number){
    let a = number.sort((a,b)=> a-b)
    console.log(a[0]);
}
minType([3,5,11,8,2])



// 8
function maxType(number){
    let a = number.sort((a,b)=> a-b)
    let lastIndex = a.length - 1
    console.log(a[lastIndex]);
}
maxType([3,5,11,8,22,4])