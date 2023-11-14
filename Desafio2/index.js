let priceProduct = Number(prompt('How much your product costs?'));

if(priceProduct >=20){
    document.getElementById('result').innerHTML= 'You can register your product!'
} else{
    document.getElementById('result').innerHTML='Cannot register!The minimum price is $20'
}