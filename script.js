// java script for dropdown menu

var settingsmenu = document.querySelector(".setting-menu");
// toggle btn
var darkbtn = document.getElementById("dark-btn");

function settingsmenutoggle() {
    settingsmenu.classList.toggle("setting-menu-height");
}

// when we click it become black again click become white
darkbtn.onclick = function() {
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    // when people click update local storage
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// to fix light or dark mode use local storage

// if user make it lightmode 
if (localStorage.getItem("theme") == "light") {
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
// if user make it dark mode
else if (localStorage.getItem("theme") == "dark") {
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
// when people visit first time
else {
    localStorage.setItem("theme", "light");
}