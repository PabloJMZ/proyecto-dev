import { components } from "./components.js"

const { moreButton,navOptions } = components();

moreButton.addEventListener("click", e => {
    navOptions.classList.toggle("close-options");
});