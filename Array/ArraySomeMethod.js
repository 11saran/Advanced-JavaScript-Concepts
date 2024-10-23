const numbers = [10,20,30,40]

const num = numbers.some((el)=>{   //Here, the some method give only two value, such as true or false.
    return el > 10
})
console.log(num)