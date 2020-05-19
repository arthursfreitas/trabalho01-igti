const start = () => {
    changeBackground(0,0,0);
    render();
}
window.addEventListener('load',start);

const changeValue = (colorValue,value) =>{
    colorValue.value = value.value;
}

const changeBackground =(red,green,blue) => {
    let div = document.querySelector('#color');
    div.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

const render = () => {
    let red = document.querySelector('#red');
    let green = document.querySelector('#green');
    let blue = document.querySelector('#blue');
    let valueRed = document.querySelector('#valueRed');
    let valueGreen = document.querySelector('#valueGreen');
    let valueBlue = document.querySelector('#valueBlue');
    let colors = Array.from(document.querySelectorAll('input[type="range"]'));

    for(let i =0; i<colors.length; i++){
        const changing = () => {
            changeBackground(valueRed.value,valueGreen.value,valueBlue.value);
            changeValue(valueRed,red);
            changeValue(valueGreen,green);
            changeValue(valueBlue,blue);
        }
        colors[i].addEventListener('input',changing);
    } 
}