function displayNumber(num){
    // let result_box=document.querySelector("#id_result")
    // result_box.value+=num
    id_result.value+=num//the above line can be written like this
}

function clearBox(){
    id_result.value=""
}

function evaluateExpression(){
    let currentexpression=id_result.value
    let out=eval(currentexpression)//eval() inbuiit fuction for evaluating the expression provided by js
    id_result.value=out
}

function backspace(){
    let currentvalue=id_result.value
    let out=currentvalue.slice(0,-1)
    id_result.value=out
}