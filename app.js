var textInput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/valyrian.json";

function getTranslationURL(text) {
  return serverURL + "?text=" + text;
}

function errorHandler(error) {
  console.log("error occurred", error);
  alert("Something went wrong with the server! Please try again later.");
}

function clickHandler() {
  var inputText = textInput.value;
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then(function logJSON(json) {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
