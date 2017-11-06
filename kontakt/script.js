var firstName = document.getElementById('firstName');
var adress = document.getElementById('adress');
var writeEmail = document.getElementById('writeEmail');
var submit = document.getElementById('submit');

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


// Mail, dziala?


function mail_form(f)
{
	function url_encode(text)
	{
		return text.replace(/%/g, '%25').replace(/\?/g, '%3F').replace(/=/g, '%3D').replace(/&/g, '%26').replace(/#/g, '%23').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
	}
	
	for (var i = 0, text = ''; i < f.elements.length; i++)
	{
		if (f.elements[i].name == '' || f.elements[i].disabled) continue;
		switch (f.elements[i].type)
		{
			case 'radio':
			case 'checkbox':
				if (f.elements[i].checked) text += url_encode(f.elements[i].name) + '=' + url_encode(f.elements[i].value) + "%0A";
			break;
			case 'select':
			case 'select-one':
			case 'select-multiple':
				for (var j = 0; j < f.elements[i].options.length; j++)
				{
					if (f.elements[i].options[j].selected) text += url_encode(f.elements[i].name) + '=' + url_encode(f.elements[i].options[j].value != '' ? f.elements[i].options[j].value : f.elements[i].options[j].text) + "%0A";
				}
			break;
			default:
				text += url_encode(f.elements[i].name) + '=' + url_encode(f.elements[i].value) + "%0A";
			break;
		}
	}

	window.location.href = f.action + (f.action.indexOf('?') == -1 ? '?' : '&') + 'body=' + text;
}

