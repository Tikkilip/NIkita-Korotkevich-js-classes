const promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
    reject("error");
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    
})