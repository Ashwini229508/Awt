const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        const res = JSON.parse(xhr.responseText); 
        console.log(res);
    } else {
        console.log("Request failed with status: " + xhr.status);
    }
};
xhr.send();
