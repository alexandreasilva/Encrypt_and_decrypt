var textInput = document.querySelector("#input-text");
var outInput = document.querySelector("#output");

function encrypt() {
    var text = textInput.value;
    var textEncrypt = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('output').innerHTML =
        '<textarea readonly id="input-text">' + textEncrypt +
        '</textarea>' + '<button class="btn-copy" id="copy" onclick="copy()">Copy</button>'
}

function decrypt() {
    var text = textInput.value;
    var textDecrypt = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('output').innerHTML =
        '<textarea readonly id="input-text">' + textDecrypt +
        '</textarea>' + '<button class="btn-copy" id="copy" onclick="copy()">Copy</button>'
}

function copy() {
    var textCopy = document.getElementById('input-text');
    textCopy.select();
    document.execCommand('copy');
    alert("Código copiado com sucesso");

}