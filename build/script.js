'use strict';
const ham = document.querySelector("#hamburger-box");
const header = document.querySelector("#header");
const hamButton = document.querySelector("#hambuger-menu");
const Button = function(buttonState) {
    this.buttonState = buttonState;
};
const hamburger = new Button('none') 
hamButton.addEventListener('click',()=>{
    ham.style.display = hamburger.buttonState === 'none'?'flex':'none';
    hamburger.buttonState = hamburger.buttonState === 'none'?'flex':'none';
    header.style.position = hamburger.buttonState === 'none'?'absolute':'fixed';
})