var firstName = document.getElementById('firstName');
var adress = document.getElementById('adress');
var writeEmail = document.getElementById('writeEmail');

adress.onclick = function () {
    this.innerHTML = this.value = '';
    this.style.color = 'black';
};

firstName.onclick = function () {
    this.innerHTML = this.value = '';
    this.style.color = 'black';
};

writeEmail.onclick = function () {
    this.innerHTML = '';
    this.style.color = 'black';
};