
function transformEnvVariable() {
    const input = document.getElementById('input').value;
    const transformed = input
        .normalize("NFD").replace(/[̀-ͯ]/g, "") // Remove acentos
        .replace(/[^a-zA-Z0-9- .]/g, '') // Remove caracteres especiais, exceto hifens, espaços e pontos
        .replace(/[- .]+/g, '_') // Substitui hifens, espaços e pontos por underscore
        .toUpperCase();

    const outputElement = document.getElementById('output');
    const copyButton = document.getElementById('copyButton');

    outputElement.textContent = transformed;
    copyButton.style.display = transformed ? 'inline-flex' : 'none';
}

function copyToClipboard() {
    const outputText = document.getElementById('output').textContent;
    if (outputText) {
        navigator.clipboard.writeText(outputText).then(() => {
            alert('Copiado para a área de transferência!');
        });
    }
}

function sharePage() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copiado para a área de transferência!');
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("input").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            transformEnvVariable();
        }
    });
});