let activePage = "user";

let url = "https://random-data-api.com/api/users/random_user";

const promise = fetch(url);

let btn1 = document.createElement('button');
btn1.className = "user_btn";
document.body.append(btn1);
btn1.innerText = "user";
btn1.addEventListener("click", () => {
    document.location = "index.html"
});

let btn2 = document.createElement('button');
btn2.className = "company_btn";
document.body.append(btn2);
btn2.innerText = "company";
btn2.addEventListener("click", () => {
    document.location = "second_page.html"
});

let userName = document.createElement('p');
userName.className = "username";
document.body.append(userName);

let avatar = document.createElement('img');
document.body.append(avatar);

let employment = document.createElement('p');
employment.className = "employment";
document.body.append(employment);

let gender = document.createElement('p');
gender.className = "gender";
document.body.append(gender);

promise.then((response) => {
    return response.json()
}).then((data) => {
    userName.innerText = data.username;
    avatar.src = data.avatar;
    gender.innerText = data.gender;
    employment.innerText = data.employment.title;
})