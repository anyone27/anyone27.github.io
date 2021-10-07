const btn = document.querySelector(".switch");

document.onload = checkStyle();

btn.addEventListener("change", darkMode);

function checkStyle() {
    let checkDarkMode = localStorage.getItem("darkMode")
    if (checkDarkMode != "true") {
        localStorage.setItem("darkMode", "false");
        document.body.classList.remove("dark-theme");
    } else {
        document.body.classList.add("dark-theme");
    }
}

function darkMode() {
    if ((localStorage.getItem("darkMode")) == "false") {
        localStorage.setItem('darkMode', 'true');
        document.body.classList.add("dark-theme");
    } else if ((localStorage.getItem("darkMode")) === "true") {
        localStorage.setItem('darkMode', 'false');
        document.body.classList.remove("dark-theme");
    }
}
