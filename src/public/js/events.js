import { components } from "./components.js"

const { moreButton,navOptions,mainButton, rootRandom,spinner, randomTopic, getSize } = components();

moreButton.addEventListener("click", e => {
    navOptions.classList.toggle("close-options");
});

mainButton.addEventListener("click",e => {
    mainButton.classList.toggle("desactived");
    rootRandom.style.height = "100px";
    mainButton.disabled = true;
    rootRandom.innerHTML = spinner;
    setTimeout(() => {
        rootRandom.innerHTML = randomTopic;
        rootRandom.style.height = `${document.getElementById("get-size").offsetHeight}px`;
        mainButton.disabled = false;
        mainButton.classList.toggle("desactived");
    },2000)
});

