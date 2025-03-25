//Select the container from the HTML
let container = document.querySelector(".container");
//Select the change grid button
let button = document.querySelector(".change");
//Select the reset button
let reset = document.querySelector(".reset");
//Select rainbow button
let rainbow = document.querySelector(".rainbow");
//Put the rows in a varibale once created
let newRows = "";
//Put the boxes in a variable once created
let boxes = "";

//If user pressed on change grid number, ask for the size
button.addEventListener("click", function(){
    changeGrid();
})
//If user pressed on the reset button, remove the paint
reset.addEventListener("click", () =>{
    //Select the individual boxes since theyre in a nodeList
    let eachBox = document.querySelectorAll(".box");
    eachBox.forEach(box =>
        box.classList.remove("drawing")
    )
})
//Create a function to dispay the grid
function createGrid(grid){
    //nested for loop to create the rows and boxes
    for (let i = 0; i < grid; i++){
        newRows = document.createElement("div");
        container.appendChild(newRows).className = "row";
        for (let j = 0; j < grid; j++){
        //Create new div elements which will be the boxes inside the container+add a class
        box = document.createElement("div");
        //Add the width and height of the box
        box.style.width = `${700 / grid}px`;
        box.style.height = `${700 / grid}px`;
        newRows.appendChild(box).className = "box";
        }}
    //Select the individual boxes since theyre in a nodeList
    let eachBox = document.querySelectorAll(".box");
    //Add an event listener when the curser hovers over the box and change its color
    eachBox.forEach(box =>
        box.addEventListener("mouseover", () =>{
            box.classList.add("drawing");
        }) 
    )
    //If user pressed on the rainbow button
    rainbow.addEventListener("click", ()=>{
        eachBox.forEach(box =>
            box.addEventListener("mouseover", () =>{
                let number = Math.floor(Math.random() * 359);
                box.style.backgroundColor = `hsl(${number}, 100%, 80%)`;
            }) 
        )
    })
}
//Function to get the color for hue
function rgbRainbow(max){
    let number = Math.floor(Math.random() * max);
}
//Function to prompt the user for grid size in order to change it
function changeGrid(){
    let userChoice = Number(prompt("Type in the size of your grid: "));
        if (!Number.isInteger(userChoice) || userChoice > 100 || userChoice < 1){
            alert("Input must be a whole number, not less than 1 nor greater than 100");
        }
        else{
            //Remove the rows
            let rows = document.querySelectorAll(".row");
            let rowLength = rows.length;
            for (let i = 0; i < rowLength; i++){
                container.removeChild(rows[i]);
            }
            //Back to the create grid function but with user's input
            createGrid(userChoice)
        }
}
createGrid(16)