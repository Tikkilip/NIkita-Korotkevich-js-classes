/*
const span = document.getElementById('count');

const btn = document.getElementById('main__btn');

btn.addEventListener ('click', function() {
span.innerText++;
})
*/


const span = document.getElementById('count');

const btn = document.getElementById('main__btn');

btn.addEventListener ('click', function() {
    if(span.style.display === "none") {
        span.style.display = "inline";
    } else {
        span.style.display = "none";
    };
})



