//tenemos un contenedor de HRML
<div id="root"></div>

//ahora tenemos un elemento con JSX
const element = <h1>Hello World!</h1>;

// asi lo mostramos al contenedor con id root
ReactDom.render(element, document.getElementById('root'));

function tick() {
    const element = (
        <div>
            <h1>helo, World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    //comentario
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
