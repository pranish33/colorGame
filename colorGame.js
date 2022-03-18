var numSquares = 6;
var rgbColor = [];
var pickedColor;
var square = document.querySelectorAll('.squares');
var displayMessage = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('colorMessage');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easy-btn");
var hardBtn = document.getElementById("hard-btn")
var buttonMode = document.querySelectorAll('.mode');


init();

function init(){

	setUpModeButtons();
	setUpSquares();
	reset();
}


function setUpModeButtons(){
	for (var i=0; i<buttonMode.length; i++){
	buttonMode[i].addEventListener("click", function(){
	buttonMode[0].classList.remove("selected");
	buttonMode[1].classList.remove("selected");
	this.classList.add("selected");
	this.textContent==="Easy" ? numSquares = 3: numSquares = 6;
	reset();
	});
}

}


function setUpSquares(){
		for (var i = 0; i<square.length; i++ ){
		// add initial colors to square 
		square[i].style.background = rgbColor[i];
		// add click listeners to squares
		square[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		// compare color to picked color 
		if(clickedColor===pickedColor){
			messageDisplay.textContent = "YAI! YOU WON!!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;		 
		}else{
		// alert("Wrong!");
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
	}
});
}
}


function reset(){
	rgbColor=generateRandomColor(numSquares);

	//pick new color
	pickedColor = pickColor();

	//change color display to match color
	displayMessage.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change color of squares
	for (var i = 0; i<square.length; i++ ){
		if(rgbColor[i]){
			square[i].style.display = "block";
			square[i].style.background = rgbColor[i];
		}
		else{
			square[i].style.display="none";
		}
	
}
	h1.style.background="steelblue";
}

resetButton.addEventListener("click", function(){
reset();
});





// function generating same color after guessing right color of square
function changeColors(color){

	// loop through all squares 
	for(var i=0; i<square.length; i++){
		//change all color to match square color
		square[i].style.background = color;
	}
}

//function to generate random color of squares
function pickColor(){
	var random = Math.floor(Math.random() * rgbColor.length);
	return rgbColor[random]
}

function generateRandomColor(num){
	// empty array 
	var arr = []
	// loop to repeat num times 
	for(var i=0; i < num; i++){
		// pushing random color to an array
		arr.push(randomColor());

	}
	// return random color array
	return arr;
}

// function to generate random value of RGB color 
function randomColor(){

	// generate random _r color value upto 255
	var r = Math.floor(Math.random() * 256);
	// generate random _g color value upto 255
	var g = Math.floor(Math.random() * 256);
	// generate random _b color value upto 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}