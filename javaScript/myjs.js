const openBar = document.querySelector("#opensidevar");
const closeBar = document.querySelector("#closesidevar");
const openbar  = document.querySelector("#openbar")

openBar.onclick = ()=>{
    openbar.style.display = "block";
    openBar.style.display = "none";
    closeBar.style.display = "block";
}

closeBar.onclick = ()=>{
    openbar.style.display = "none";
    openBar.style.display = "block";
    closeBar.style.display = "none";
}


const homepaged = document.querySelector("#homepaged");
const aboutpaged = document.querySelector("#aboutpaged");
const skillgoalpaged = document.querySelector("#skillgoalpaged");
const contactpaged = document.querySelector("#contactpaged");


// block with there  id 
const homeid    = document.querySelector("#homeid");
const aboutid    = document.querySelector("#aboutid");
const skills    = document.querySelector("#skillgoalId");
const contactId    = document.querySelector("#contactId");

// home blocks 
homepaged.onclick = ()=>{
    homeid.style.display = "block";
    aboutid.style.display = "none";
    skills.style.display = "none";
    contactId.style.display = "none";
}
// about blocks
aboutpaged.onclick = ()=>{
    homeid.style.display = "none";
    aboutid.style.display = "block";
    skills.style.display = "none";
    contactId.style.display = "none";
}

// skill and goals blocks
skillgoalpaged.onclick = ()=>{
    homeid.style.display = "none";
    aboutid.style.display = "none";
    skills.style.display = "block";
    contactId.style.display = "none";
}

// contact blocks
contactpaged.onclick = ()=>{
    homeid.style.display = "none";
    aboutid.style.display = "none";
    skills.style.display = "none";
    contactId.style.display = "block";
}