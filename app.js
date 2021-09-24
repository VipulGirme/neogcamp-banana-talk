var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")


btnTranslate.addEventListener("click", function clickEventHandler(){
    console.log("clicked!");
    console.log("Input , "+txtInput.value);
    console.log( + " -- " + outputDiv);
});