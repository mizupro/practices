init();

function init() {
    setInterval(getTime, 1000);
}

function getTime() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    drawTime(h, m, s);
}

function drawTime(h, m, s) {
    const clockContainer = document.querySelector(".js-clockContainer");
    const clockTitle = clockContainer.querySelector(".js-clockTitle");
    clockTitle.innerText = `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
}