const array = [11,12,13,14,15,16,17,18,19];

console.log(array.filter((value)=>value===55));
bal = 0;
array.forEach((val,i)=>{
    if(i>=2&&i<=6){
    bal+=val
}
})
console.log(bal);

array.slice(0,4).forEach((val)=>{bal+=val}) 
console.log(bal);



