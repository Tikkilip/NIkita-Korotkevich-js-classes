/*
const span = document.getElementById('count');

const btn1 = document.getElementById('main__btn+');
btn1.addEventListener ('click', function() {
    span.innerText++;
})

const btn2 = document.getElementById('main__btn-');
btn2.addEventListener ('click', function() {
    span.innerText--;
})
*/


const span = document.getElementById('count');

const squares = document.getElementsByClassName('square');
const square = squares[0];
square.addEventListener ('click', function() {
    span.innerText = 0;
})

const btns = document.getElementsByTagName('button');
const btn1 = btns[0];
const btn2 = btns[1];
btn1.addEventListener ('click', function(event) {
    span.innerText++;
    event.stopPropagation();
})

btn2.addEventListener ('click', function(event) {
    span.innerText--;
    event.stopPropagation();
})




