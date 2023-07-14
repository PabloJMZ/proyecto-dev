const spinner = `
<div class="spinner-container">
    <div class="spinner"></div>
</div>`;

const randomTopic = `
<div id="get-size">
    <h2 class="title">Nodejs</h2>
    <p class="paragraph">
        Node.js es un entorno de ejecución de JavaScript del lado del servidor, basado en el motor de JavaScript V8 de Chrome. Proporciona un entorno de tiempo de ejecución que permite ejecutar código JavaScript fuera de un navegador web, lo que significa que puedes usar JavaScript para crear aplicaciones de servidor.
    </p>
    <h3 class="subtitle">Enlaces</h2>
    <ul>
        <li><a target="_blank" href="https://www.w3schools.com/nodejs/default.asp" class="link">W3schools</a></li>
        <li><a target="_blank" href="https://nodejs.dev/en/learn/" class="link">Nodejs</a></li>
        <li><a target="_blank" href="https://www.codecademy.com/learn/learn-node-js" class="link">Cocademy</a></li>
        <li><a target="_blank" href="https://www.tutorialspoint.com/nodejs/index.htm" class="link">Tutorialspoint</a></li>
        <li><a target="_blank" href="https://learn.microsoft.com/en-us/training/modules/intro-to-nodejs/" class="link">Microsoft</a></li>
    </ul>
</div>`;

export function components(){
    return {
        moreButton: document.getElementById("more-button"),
        navOptions: document.getElementById("links"),
        mainButton: document.getElementById("main-button"),
        rootRandom: document.getElementById("root-random"),
        spinner, randomTopic
    }
}