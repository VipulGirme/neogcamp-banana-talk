var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTransaltion(text) {
    return serverUrl+ "?"+"text="+text;
}

function clickHandler() {

    var textInput = txtInput.value;
    console.log(textInput);
    fetch(getTransaltion(textInput))
    .then(res => (res.json())
    .then(json => {
        outputDiv.innerText = json.contents.translated
    }));
}

btnTranslate.addEventListener("click", clickHandler);