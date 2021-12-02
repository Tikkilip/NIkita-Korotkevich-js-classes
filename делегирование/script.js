const ul = document.getElementById('ul');

ul.addEventListener('click', function(event) {
    if(event.target.tagName === 'LI') {
        console.log(event.target.innerText);
    }
})