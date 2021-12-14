let url = 'https://random-data-api.com/api/users/random_user';

const promise =  fetch(url);
const first_names = document.getElementsByClassName('first_name');
const first_name = first_names[0];

const last_names = document.getElementsByClassName('last_name');
const last_name = last_names[0];

const profile_photo = document.getElementById('photo');

const addresses = document.getElementsByClassName('address');
const address = addresses[0];

const emails = document.getElementsByClassName('E-mail');
const email = emails[0];

const passwords = document.getElementsByClassName('password');
const password = passwords[0];

promise.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
    first_name.innerText = data.first_name;
    last_name.innerText = data.last_name;
    profile_photo.src = data.avatar;
    address.innerText = data.address.city;
    email.innerText = data.email;
    password.innerText = data.password;
});