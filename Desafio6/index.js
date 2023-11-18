let computerNumber
let userNumbers =[]
let attempts = 0
var maxGuesses = 10

function newGame(){
    window.location.reload()
}

function init(){
    computerNumber = Math.floor(Math.random() * 100 +1)
}

function compareNumbers(){
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' '+ userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if(attempts < maxGuesses){
        if(userNumber > computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your number is too high!'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
    
        } else if (userNumber < computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your number is too low!'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        } else{
            document.getElementById('textOutput').innerHTML = 'Congratulations! You got it right!'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly')
        }
    } else{
        document.getElementById('textOutput').innerHTML = 'You lose! The computer number was ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly')
    }
    
}


//pode melhorar fazendo com que a pessoa não consiga digitar acima de 100