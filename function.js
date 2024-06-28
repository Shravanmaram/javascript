function yours(name){
    console.log("iam"+name+"maram")
}
yours("shravan")
function sum(a,b){
console.log(a+b)
}
sum(7,7)

function sum(a,b){
    // console.log(a+b)
    return a+b
    }
    result=sum(7,7)
    console.log("the sum is",result)

// the another way

    function sum(a,b,c=3){
        // console.log(a+b)
        return a+b+c
        }
        result1=sum(10,7)
        result2=sum(7,4,5)
        console.log("the sum is",result1)
        console.log("the sum is",result2)
        const func1=(x) =>{
            console.log("iam an arrow function",x)

        }
        func1(33)
        func1(23)