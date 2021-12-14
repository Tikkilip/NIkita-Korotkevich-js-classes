let activePage = "company";

let url = "https://random-data-api.com/api/company/random_company";

const promise = fetch(url);

let btn1 = document.createElement('button');
btn1.className = "user_btn";
document.body.append(btn1);
btn1.innerText = "user";
btn1.addEventListener("click", () => {
    document.location = "index.html"
})

let btn2 = document.createElement('button');
btn2.className = "company_btn";
document.body.append(btn2);
btn2.innerText = "company";
btn2.addEventListener("click", () => {
    document.location = "second_page.html"
});

let companyName = document.createElement('p');
companyName.className = "companyName";
document.body.append(companyName);

let logo = document.createElement('img');
document.body.append(logo);

let address = document.createElement('p');
address.className = "address";
document.body.append(address);

let employee = document.createElement('p');
employee.className = "employee";
document.body.append(employee);

promise.then((response) => {
    return response.json()
}).then((data) => {
    companyName.innerText = data.business_name;
    logo.src = data.logo;
    address.innerText = data.full_address;
    employee.innerText = data.employee_identification_number;
})