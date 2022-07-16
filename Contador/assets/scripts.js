var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var resetar = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
function reset(){
    currentNumberWrapper.innerHTML = resetar;
}