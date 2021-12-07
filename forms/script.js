const form = document.form;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = new FormData(event.target);
    console.log(values.values());
});