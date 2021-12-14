let url = 'https://random-data-api.com/api/restaurant/random_restaurant';

const promise =  fetch(url);

const names = document.getElementsByClassName('name');
const name = names[0];

const logo = document.getElementById('logo');

const addresses = document.getElementsByClassName('address');
const address = addresses[0];

const time = document.getElementsByClassName('hours');
const hours = time[0];

const hoursKeys = Object.keys(hours);
const arr = hoursKeys.map((hour) => {
    if(hours[hour].is_clothed === false) {
        return {
            [hour]: hours[hour]
        }
    }
});
console.log(arr.filter((item) => Boolean(item)));

const desc = document.getElementsByClassName('description');
const description = desc[0];

const phones = document.getElementsByClassName('phone');
const phone = phones[0];

const types = document.getElementsByClassName('type');
const type = types[0];

promise.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    name.innerText = data.name;
    logo.src = data.logo;
    description.innerText = data.description;
    address.innerText = data.address;
    hours.innerText = data.hours;
    phone.innerText = data.phone_number;
    type.innerText = data.type;
});