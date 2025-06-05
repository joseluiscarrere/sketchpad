//default number of squares per side on grid
let numSquares = 80;

let outerContainer = document.querySelector('.outer-container');

// Function to create grid of squares through the DOM (Document Object Model)
function createGrid() {
    // loop to create x number of inner containers within outer container based on value of numSquares (either default value or user specified)
    for (let i = 0; i < numSquares; i++) {
        const innerContainer = document.createElement('div');
        innerContainer.classList.add('inner-container');
        outerContainer.append(innerContainer);
        // loop to create x number of squares within each innner container based on value of numSquares (either default value or user specified)
        for (let j = 0; j < numSquares; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square-div');
            innerContainer.append(squareDiv);
        }
    }
}

//function to create random RGB value from 0 to 255
const randColor = () => {
    return Math.floor(Math.random() * 256);
}

// variable to track mouse state
let mouseDown = false;

//event listener to listen for when user holds down on mouse click button
document.body.addEventListener('mousedown', function () {
    mouseDown = true;
});
document.body.addEventListener('mouseup', function () {
    mouseDown = false;
})

// Event listener function to produce color effect over squares in grid that changes their color when mouse passes through them while mouse is held down
function hoverEffect() {
    const squareDivs = document.querySelectorAll('.square-div');
    for (let squareDiv of squareDivs) {
        // event listener that will "listen" for mouse (if it's held down) when it hovers over any of the squares and will trigger function that changes the square's colors based on randomly generated rgb values
        squareDiv.addEventListener('mouseover', function () {
            if (mouseDown) {
                squareDiv.style.backgroundColor = `rgb(${randColor()},${randColor()},${randColor()})`;
            }
        })
    }
}
createGrid();
hoverEffect();

//button used to create new grid of squares
const button = document.querySelector('button');
button.addEventListener("click", function () {
    numSquares = prompt("Enter number of squares per side for new grid");
    while (true) {
        // if cancel button is pressed
        if (numSquares === null) {
            numSquares = 80;
            break;
        } else if (numSquares <= 100) {
            break;
        } else {
            numSquares = prompt("Invalid input. Enter a maximum of up to 100 squares per grid ")
        }
    }
    outerContainer.remove();
    outerContainer = document.createElement('div');
    outerContainer.classList.add('outer-container');
    document.body.append(outerContainer);
    createGrid();
    hoverEffect();
})



