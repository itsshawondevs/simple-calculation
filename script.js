let number1 = document.querySelector(".number1")
let number2 = document.querySelector(".number2")

let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let into = document.querySelector(".into")
let bhag = document.querySelector(".bhag")
let clear = document.querySelector(".clear")

let result = document.querySelector(".result")

plus.addEventListener("click",function(){
    result.innerHTML = "Result = " + `${parseInt(number1.value) + parseInt(number2.value)}`
})

minus.addEventListener("click",function(){
    result.innerHTML = "Result = " + `${number1.value - number2.value}`
})

into.addEventListener("click",function(){
    result.innerHTML = result.innerHTML = "Result = " + `${number1.value * number2.value}`
})

bhag.addEventListener("click",function(){
    result.innerHTML = result.innerHTML = "Result = " + `${number1.value / number2.value}`
})

clear.addEventListener("click",function(){
    result.innerHTML = location.reload()
})