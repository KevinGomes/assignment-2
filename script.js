// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 


// Add a row
//if grid is empty, 
//addR and addC should always create 1 cell
function addR() {
    if (numCols === 0) {
        numCols++;
    }
    const grid = document.getElementById("grid");
    const newRow = document.createElement("tr");
    for (let i = 0; i < numCols; i++) {
        const newCell = document.createElement("td");
        newRow.appendChild(newCell);
    }
    grid.appendChild(newRow);
    numRows++;
}

// Add a column
function addC() {
    const grid = document.getElementById("grid");
    const rows = grid.getElementsByTagName("tr");
    if (numRows === 0) {
        addR();
    } else {
        for (let row of rows) {
            const newCell = document.createElement("td");
            row.appendChild(newCell);
        }
        numCols++;
    }
}

// Remove a row
function removeR() {    
    const grid = document.getElementById("grid");
    if (numRows > 0) {
        grid.deleteRow(numRows - 1);
        numRows--;
    }
}

// Remove a column
function removeC() {
    const grid = document.getElementById("grid");
    if (numCols > 0) {
        const rows = grid.getElementsByTagName("tr");
        for (let row of rows) {
            row.deleteCell(numCols - 1);
        }
        numCols--;
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}