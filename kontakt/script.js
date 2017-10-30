var firstName = document.getElementById('firstName');
var adress = document.getElementById('adress');
var writeEmail = document.getElementById('writeEmail');

adress.onclick = function () {
    //this.innerHTML.value = '';
    this.style.color = 'black';
}; //do poprawy usuniecie value po click

firstName.onclick = function () {
    //this.innerHTML = '';
    this.style.color = 'black';
};

writeEmail.onclick = function () {
    this.innerHTML = '';
    this.style.color = 'black';
};