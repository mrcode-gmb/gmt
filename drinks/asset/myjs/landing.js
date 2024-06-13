const menu = document.querySelector("#menus");
const headerHeader = document.querySelector(".header-mobile");

menu.onclick = () => {
    if(headerHeader.style.height == 0){
        menu.classList.add("afterMenu");
        headerHeader.style.height = "auto";
        headerHeader.style.padding = "12px 0";
        headerHeader.classList.add("padding-nav");
    }
    else{
        menu.classList.remove("afterMenu");
        headerHeader.classList.remove("padding-nav");
        headerHeader.style.height = "";
        headerHeader.style.padding = "0px";
    }
}


// function myFunction() {
//     let input = document.getElementById('myInput').value
//     input = input.toLowerCase();
//     let x = document.getElementsByClassName('table-row');

//     for (i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display = "none";
//         }
//         else {
//             x[i].style.display = "";
//         }
//     }
// }