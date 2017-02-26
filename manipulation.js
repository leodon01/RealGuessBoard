var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easybutton");
var hardButton = document.querySelector("#hardbutton");

easyButton.addEventListener("click", function() {
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  numSquares = 3
  colors = generateRandomColors(numSquares);
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  h1.style.background = null;
  for (i=0; i<squares.length; i++) {
    if(colors[i]) {
    squares[i].style.background = colors[i];
  } else {
    squares[i].style.display = "none";
  }
  }
  pickedColor = pickColor()
})

hardButton.addEventListener("click", function() {
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  h1.style.background = null;
  for(i=0; i<squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    }
})


colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.background = "steelblue";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = null;
  for(i=0; i<squares.length; i++) {
    squares[i].style.background = colors[i];
  }

})


for (var i=0; i<squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor)
      h1.style.background = pickedColor;
      resetButton.textContent = "Play Again"
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  })
}

function changeColors(color) {
  for (var i=0; i<squares.length; i++) {
    squares[i].style.background = color;
  }
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i<num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")"
}
