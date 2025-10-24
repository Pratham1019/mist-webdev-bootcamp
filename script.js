const clock = document.querySelector(".clock");
const options = document.querySelector(".options");
const buttons = document.querySelectorAll(".city");

let activeCity = "Manipal";

options.addEventListener("click", (e) => {
    deactivateAll();
    e.target.setAttribute("aria-pressed", "true");
    activeCity = e.target.value;
    updateTime(activeCity);
});

function deactivateAll() {
    buttons.forEach(button => {
        button.setAttribute("aria-pressed", "false");
    });
}


function updateTime(city) {
    const now = new Date();
    let hours = now.getHours(), minutes = now.getMinutes(), seconds = String(now.getSeconds()).padStart(2, "0");

    if (city === "Manipal") {
        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
    } else if (city === "London") {
        minutes -= 30;
        if (minutes < 0) {
            minutes += 60;
            hours -= 1;
        }

        hours -= 4;

        if (hours < 0) {
            hours += 24;
        }

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
    } else if (city === "New York") {
        minutes -= 30;
        if (minutes < 0) {
            minutes += 60;
            hours -= 1;
        }

        hours -= 9;

        if (hours < 0) {
            hours += 24;
        }

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
    } else if (city === "Tokyo") {
        minutes += 30;
        if (minutes > 59) {
            minutes -= 60;
            hours += 1;
        }

        hours += 3;

        if (hours > 23) {
            hours -= 24;
        }

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
    }

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

updateTime(activeCity);

setInterval(() => updateTime(activeCity), 1000);