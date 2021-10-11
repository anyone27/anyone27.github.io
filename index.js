const btn = document.querySelector(".switch");
const slideLabel = document.getElementById("sliderLabel");
const slideCheck = document.getElementById("sliderCheck");

document.onload = checkStyle();

btn.addEventListener("change", darkMode);

function checkStyle() {
    let checkDarkMode = localStorage.getItem("darkMode")
    if (checkDarkMode != "true") {
        localStorage.setItem("darkMode", "false");
        document.body.classList.remove("dark-theme");
        slideLabel.innerHTML = "Dark Mode"
        slideCheck.checked = true;
    } else {
        document.body.classList.add("dark-theme");
        slideLabel.innerHTML = "Light Mode"
        slideCheck.checked = false;

    }
}

function darkMode() {
    if ((localStorage.getItem("darkMode")) == "false") {
        localStorage.setItem('darkMode', 'true');
        document.body.classList.add("dark-theme");
        slideLabel.innerHTML = "Light Mode"
        slideCheck.checked = false;
    } else if ((localStorage.getItem("darkMode")) === "true") {
        localStorage.setItem('darkMode', 'false');
        document.body.classList.remove("dark-theme");
        slideLabel.innerHTML = "Dark Mode"
        slideCheck.checked = true;
    }
}
