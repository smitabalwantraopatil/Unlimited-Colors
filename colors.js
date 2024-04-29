const randomColors = function(){
    const hex = '0123456789ABCDEF';
    let colors = '#';
    for(let i=0 ; i<6;i++){
        colors +=hex[Math.floor(Math.random() * 16)]
    }
    return colors
}
const body = document.querySelector('body')
let intervalId;
const startChangingColor = function() {
    intervalId = setInterval(changebgColor,1000)
}

const changebgColor = function(){
    body.style.backgroundColor=randomColors()
}

const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId=null;
}

const start = document.getElementById('start').addEventListener(
    'click',startChangingColor
)
const stop = document.getElementById('stop').addEventListener(
    'click',stopChangingColor
)




