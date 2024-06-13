
const modal = () => {

    const bookmodal = document.querySelector("#modal");

    bookmodal.style.display = "flex";
}

const modalParam = (params) => {
    const bookmodal = document.querySelector("#modal" + params);
    bookmodal.style.display = "flex";
}
const modalDismiss = () => {
    const bookmodal = document.querySelector("#modal");
    bookmodal.style.display = "none";

}

const modalDismissParams = (params) => {
    const bookmodal = document.querySelector("#modal" + params);
    bookmodal.style.display = "none";

}