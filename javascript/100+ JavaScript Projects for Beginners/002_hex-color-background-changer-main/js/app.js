const hexValueText = document.querySelector("#hex-value"),
    btn = document.querySelector("#btn"),
    body = document.querySelector("body");
const hexChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function handleClick() {
    let value = "#";
    for (let i = 0; i < 6; i++) {
        const randomIdx = Math.floor(Math.random() * hexChars.length);
        value += hexChars[randomIdx];
    }
    hexValueText.innerText = ` ${value}`;
    body.style.backgroundColor = value;
}

function init() {
    btn.addEventListener("click", handleClick);
}

init();
