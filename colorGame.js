var rgbColor = [

"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(255, 0, 255)",
"rgb(0, 0, 255)",
"rgb(0, 255, 0)",


	
];

var square = document.querySelectorAll('.squares');
var displayMessage = document.getElementById('colorDisplay');
displayMessage.texture = document;


for (var i = 0; i<=square.length; i++ ){

	square[i].style.backgroundColor = rgbColor[i];

}