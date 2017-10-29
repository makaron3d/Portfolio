var button = document.createElement('button');
button.innerHTML = 'touch!';


var jumbotron = document.getElementById('hero');

//var jumbotron = document.querySelector("body");
jumbotron.appendChild(button);

button.onclick = function () {
    alert('#$@*^');
};
