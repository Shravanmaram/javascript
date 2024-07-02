let random=Math.random()
let a=prompt("Enter first num")
let c=prompt("Enter operation")
let b=prompt("enter second number")
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
if(random > 0.1){
    // perform correct calculation
    console.log('The result is ${a} ${b} ${c}')
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    // perform wrong calculation
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}