const div = document.getElementById('div');

div.addEventListener('mousemove', function(event) {
    console.log(event);
})

document.body.addEventListener('keydown', function(event) {
    console.log(event);
})