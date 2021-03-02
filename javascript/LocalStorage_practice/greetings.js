const USER_LOCAL = "currentUser";
const SHOWING = "showing";

init();

function init() {
    loadName();
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LOCAL);

    if (currentUser !== null) {
        showHello(currentUser);
    } else {
        askName();
    }
}

function showHello(name) {
    const greetingTitle = document.querySelector(".js-greeting");
    greetingTitle.classList.add(SHOWING);
    greetingTitle.innerText = `Hello ${name}`;
}

function askName() {
    const nameForm = document.querySelector(".js-username");
    nameForm.classList.add(SHOWING);
    nameForm.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    const nameForm = document.querySelector(".js-username");
    const nameInput = nameForm.querySelector("input");
    const typedName = nameInput.value;
    saveName(typedName);
    showHello(typedName);
}

function saveName(name) {
    localStorage.setItem(USER_LOCAL, name);
    const nameForm = document.querySelector(".js-username");
    nameForm.classList.remove(SHOWING);
}