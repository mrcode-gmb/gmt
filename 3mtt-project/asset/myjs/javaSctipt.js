const closebar = document.querySelector("#closesidebar");
const openbar = document.querySelector("#opensidebar");
const navbar = document.querySelector(".navbar");
const mainbody = document.querySelector(".main-body");
const header = document.querySelector("#header");
var span = document.getElementsByTagName("span");

closebar.onclick = () => {
    navbar.style.width = "70px";
    header.style.width = "96%";
    mainbody.style.width = "96%";
    openbar.style.display = "flex";
    closebar.style.display = "none";
    for (var i = 0; i < span.length; i++) {
        span[i].style.display = "none";
    }
}

openbar.onclick = () => {
    navbar.style.width = "240px";
    header.style.width = "82.5%";
    mainbody.style.width = "82.5%";
    openbar.style.display = "none";
    closebar.style.display = "flex";
    for (var i = 0; i < span.length; i++) {
        span[i].style.display = "";
    }
}

// side navigation in mobile phone 

const openmobilebar = document.querySelector("#openmobilebar");
const closemobilebar = document.querySelector("#closemobilebar");

openmobilebar.onclick = () => {
    navbar.style.width = "200px";
    openmobilebar.style.display = "none";
    closemobilebar.style.display = "flex";
}
closemobilebar.onclick = () => {
    navbar.style.width = "0px";
    openmobilebar.style.display = "flex";
    closemobilebar.style.display = "none";
}



// modal java script 