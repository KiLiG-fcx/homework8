// Variables!
var radius = 15;
var x = 50;
var y =150;

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d");
var colorPicker = document.querySelector("input");

// I would add more variables for x, y, radius, and color
var drawing = true;
var colordefault = true;

//Listeners!!
//Add a listener for loading the window
window.addEventListener("load", function(){
	ctx.canvas.width = window.innerWidth * 0.75;
	ctx.canvas.height = window.innerHeight * 0.75;
	console.log("Loading the window.");
})

// resize the window to 0.75
window.addEventListener("resize", function(){
	ctx.canvas.width = window.innerWidth * 0.75;
	ctx.canvas.height = window.innerHeight * 0.75;
})

//Add a listener for the mouse movement (started below)
canvas.addEventListener('mousemove', function(e){
	const x = e.clientX; // Get the horizontal coordinate
	const y = e.clientY; 
	if(drawing){
		draw(x,y,5);
		ChangeColor();
	}
})

//Add a listener for the key events (started below)
document.addEventListener('keydown', function(e){
	if (e.key == ' '){
		// space bar to clear
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		console.log("clear canvas");
	}
	if (e.key == 'ArrowUp'){
		// the pen wouldn't draw
		drawing = false;
		console.log("lift the pen");
	}
	if (e.key == 'ArrowDown'){
		// start drawing again
		drawing = true;
		console.log("put down the pen");
	}
})

// Functions!
function ChangeColor(){
	// Execute a JavaScript when a user is pressing a key
	// https://www.w3schools.com/jsref/event_onkeydown.asp
	document.addEventListener('keydown', function(e){
		colordefault = false;
		// change 4 colors
		if (e.key == 'r'){
			ctx.fillStyle = "rgb(255, 0, 0)";
			console.log("Color is red.");
		}
		if (e.key == 'b'){
			// change to blue
			ctx.fillStyle = "rgb(0, 0, 255)";
			console.log("Color is blue.");
		}
		if (e.key == 'g'){
			// change to green
			ctx.fillStyle = "rgb(0, 255, 0)";
			console.log("Color is green.");
		}
		if (e.key == 'y'){
			// change to yellow
			ctx.fillStyle = "rgb(255, 255, 0)";
			console.log("Color is yellow.");
		}
	});
	// Execute a JavaScript when a user changes the selected option of a <select> element
	colorPicker.addEventListener('change', function(){
		// change to the color picker
		colordefault = false;
		ctx.fillStyle = colorPicker.value;
		console.log("Color changed!");})

}
// I would add a function for draw
function draw(x,y,radius){
	console.log("I am going to draw!!");
	//CHECK OUT beginPath()
	ctx.beginPath();
	// The beginPath() method begins a path, or resets the current path
	ctx.arc(x, y, radius, 0, 2 * Math.PI*2);
	// draw as a circle
	if (colordefault) {
		// default color red
		ctx.fillStyle = "rgb(255, 0, 0)";
	}
	// ensures that the color defaults to red
	ctx.fill();
}

