function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function switchTheme() {
    var themeLink = document.getElementById("theme-link");
    var currentTheme = themeLink.getAttribute("href");

    if (currentTheme === "style.css") {
        themeLink.setAttribute("href", "style_dark.css");
        setCookie("theme", "dark", 7);
    } else {
        themeLink.setAttribute("href", "style.css");
        setCookie("theme", "light", 7);
    }
}
function setButtonHeight() {
    var header = document.querySelector('header');
    var backButton = document.getElementById('back');
    backButton.style.height = header.offsetHeight + 'px';
}

window.onresize = setButtonHeight;

window.onload = function() {
    var theme = getCookie("theme");
    var themeLink = document.getElementById("theme-link");
    if (theme === "dark") {
        themeLink.setAttribute("href", "style_dark.css");
    } else {
        themeLink.setAttribute("href", "style.css");
    }
};
window.onload = setButtonHeight;
