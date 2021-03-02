const btn = document.querySelector(".btn"),
    body = document.querySelector("body");
const colors = ["red", "green", "blue", "yellow", "pink", "purple"];

function handleClick() {
    const idx = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[idx];
}

function init() {
    body.style.backgroundColor = "violet";
    btn.addEventListener("click", handleClick);
}

init();