const forms = document.getElementsByClassName('form');
form.addEventListener ('click', function(){
    alert("form")
});

const divs = document.getElementsByClassName('div');
div.addEventListener ('click', function(){
    alert("div")
});

const ps = document.getElementsByClassName('p');
p.addEventListener ('click', function(event){
    alert("p")
    event.stopPropagation()
});