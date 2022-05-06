/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

// Changing the class of the body will fit it to class style specifiers in the CSS
const changeToDefault = () => {
   document.querySelector("body").className = '';
}
const changeToOcean = () => {
   document.querySelector("body").className = 'ocean';
}
const changeToDesert = () => {
   document.querySelector("body").className = 'desert';
}
const changeToHighContrast = () => {
   document.querySelector("body").className = 'high-contrast';
}

document.querySelector("#default").addEventListener('click', changeToDefault)
document.querySelector("#ocean").addEventListener('click', changeToOcean)
document.querySelector("#desert").addEventListener('click', changeToDesert)
document.querySelector("#high-contrast").addEventListener('click', changeToHighContrast)