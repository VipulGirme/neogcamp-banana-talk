var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

btnTranslate.addEventListener("click", function clickEventHandler(){
    console.log("clicked!");
    console.log("Input , "+txtInput.value);
});