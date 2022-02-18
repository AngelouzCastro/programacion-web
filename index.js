
const API_URL = 'http://jsonplaceholder.typicode.com';


//const xhr = new XMLHttpRequest();
const HTMLResponse = document.querySelector("#app");
const ul = document.createElement("ul");


fetch(`${API_URL}/users`)
.then((response) => response.json())
.then((users)=> {
    users.forEach((user) => {
        let elem = document.createElement('li');
        elem.appendChild(
            document.createTextNode(`${user.name} email:${user.email}`)
        );
        ul.appendChild(elem);
    });

    HTMLResponse.appendChild(ul);

    //const tpl = users.map(user => `<li>${user.name} email:${user.email}</li>`)
    //HTMLResponse.innerHTML = '<ul>${tpl}</ul>'
});

/*
function onRequestHandler() 
{
    if(this.readyState == 4 && this.status == 200)
    {
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector('#app');

        const template = data.map(user => `<li>${user.name} email:${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${template}</ul>`;
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET",`${API_URL}/users`);
xhr.send();

console.log("hola");
*/