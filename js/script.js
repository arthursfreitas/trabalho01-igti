window.addEventListener('load',start);

function start(){
    changeBackground(0,0,0);
    render();
}

function changeColor(value,colorValue){
            colorValue.value = value.value;
}

function changeBackground(red,green,blue){
    let div = document.querySelector('#color');
    div.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function render(){
    let red = document.querySelector('#red');
    let green = document.querySelector('#green');
    let blue = document.querySelector('#blue');
    let valueRed = document.querySelector('#valueRed');
    let valueGreen = document.querySelector('#valueGreen');
    let valueBlue = document.querySelector('#valueBlue');
    let colors = Array.from(document.querySelectorAll('input[type="range"]'));

    for(let i =0; i<colors.length; i++){
        colors[i].addEventListener('change',changing);
        function changing(){
            changeBackground(valueRed.value,valueGreen.value,valueBlue.value);
            changeColor(red,valueRed);
            changeColor(green,valueGreen);
            changeColor(blue,valueBlue);
        }
    } 
}