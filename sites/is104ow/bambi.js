function switchTheme() {
    var themeLink = document.getElementById("theme-link");
    var currentTheme = themeLink.getAttribute("href");

    if (currentTheme.includes("style.css")) {
        themeLink.setAttribute("href", currentTheme.replace("style.css", "style_dark.css"));
        localStorage.setItem("theme", "dark");
    } else {
        themeLink.setAttribute("href", currentTheme.replace("style_dark.css", "style.css"));
        localStorage.setItem("theme", "light");
    }
}

window.onload = function() {
    var theme = localStorage.getItem("theme");
    var themeLink = document.getElementById("theme-link");
    var currentTheme = themeLink.getAttribute("href");

    if (theme === "dark") {
        themeLink.setAttribute("href", currentTheme.includes("style.css") ? currentTheme.replace("style.css", "style_dark.css") : currentTheme);
    } else {
        themeLink.setAttribute("href", currentTheme.includes("style_dark.css") ? currentTheme.replace("style_dark.css", "style.css") : currentTheme);
    }
};
var header = document.querySelector('header');
function setButtonHeight() {
    var backButton = document.getElementById('back');
    backButton.style.height = header.offsetHeight + 'px';
}

window.onresize = setButtonHeight;

window.onload = function() {
    //var theme = getCookie("theme");
    var themeLink = document.getElementById("theme-link");
    if (theme === "dark") {
        themeLink.setAttribute("href", "style_dark.css");
    } else {
        themeLink.setAttribute("href", "style.css");
    }
};
header.onload = setButtonHeight;

