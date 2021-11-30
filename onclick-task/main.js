const p = document.getElementsByClassName('p');

const button_1 = p[0];
const button_2 = p[1];
const button_3 = p[2];

let array = [button_1, button_2, button_3];

for (let i = 0; i <= array.length; i++) {
    array[i].addEventListener ('click', function() {
        if(array[i].style.display === "none") {
            array[i].style.display = "inline";
        } 
        else {
            array[i].style.display = "none";
        };
    })
}