let adjectiveButton = document.getElementById('adjectiveButton');
let adjectiveInfo = document.getElementById('adjectiveInfo');
let adjectiveInput = document.getElementById('adjectiveInput');

adjectiveButton.onclick = function (e) {
    e.preventDefault();
    adjectiveInfo.innerText = `Min kompis Håkan är ${adjectiveInput.value} `
}