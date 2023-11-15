function calculate(){
    let num1 = Number(document.getElementById('number1').value)
    let num2 = Number(document.getElementById('number2').value)
    let total = 0;

    if (document.getElementById('add').checked){
        total = num1 +num2;
        
    } else if(document.getElementById('subtract').checked){
        total = num1 - num2;
    
    } else if(document.getElementById('multiply').checked){
        total = num1 * num2;
    } else{
        total = num1 / num2;
    }
    document.getElementById('result').innerHTML = 'Result: ' + String(total)

}



