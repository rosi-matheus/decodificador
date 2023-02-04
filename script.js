var textInput = document.querySelector("textarea.text-area");
var output = document.querySelector("#output");

function criptografar() {
  var texto = textInput.value;

  var resultCripto = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  output.innerHTML =
    '<textarea readonly id="output-texto">' +
    resultCripto +
    "</textarea>" +
    '<button class="btn-copiar" id="copiar" onclick="copiar()">copiar</button>';
}

function descriptografar() {
  var texto = textInput.value;

  var resultDescripto = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  output.innerHTML =
    '<textarea readonly id="output-texto">' +
    resultDescripto +
    "</textarea>" +
    '<button class="btn-copiar id="copiar" onclick="copiar()">copiar</button>';
}

function copiar() {
  var textoCop = document.getElementById("output-texto");

  textoCop.select();
  document.execCommand("copy");
  alert("Texto copiado");
  
}
