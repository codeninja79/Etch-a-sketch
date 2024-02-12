const gridDimension = 1000;



const sketchArea = document.querySelector("#sketch-area");

sketchArea.style.width = `${gridDimension}px`;
sketchArea.style.height = `${gridDimension}px`;

const clearSketchBtn = document.querySelector("#clear-sketch")
const createNewGrid = document.querySelector("#new-grid")




function bgcolor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = '#' + randomColor;
}
function createGridCells(){
    let gridSize = parseInt(prompt("Enter the grid size"))
    if(parseInt(gridSize)>100 || parseInt(gridSize)<=0)
        return alert("Enter a number between 1 and 100!");
    else{
        for(let i=0;i< gridSize*gridSize; i++)
        {
            const gcell = document.createElement("div")

            gcell.style.width = `${(gridDimension / gridSize)-2}px`;
            gcell.style.height = `${(gridDimension / gridSize)-2}px`;

            gcell.classList.add("cell")

            sketchArea.appendChild(gcell)

               
            gcell.addEventListener("mouseover",bgcolor)
        }
    }
}

function newSketchArea(gridSize){
    for(let i=0;i< gridSize*gridSize; i++)
    {
        const gcell = document.createElement("div")

        gcell.style.width = `${(gridDimension / gridSize)-2}px`;
        gcell.style.height = `${(gridDimension / gridSize)-2}px`;

        gcell.classList.add("cell")

        sketchArea.appendChild(gcell)

        gcell.addEventListener("mouseover", bgcolor)

    }
}

function removeGridCells(){
    while(sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild)
    }
}

function addNewGrid(){
    removeGridCells();
    createGridCells();
}
function clearSketch(){
    removeGridCells();
    newSketchArea();
    alert("Sketch clear! Click on 'New grid' for a new Sketch!")
}

clearSketchBtn.addEventListener("click", clearSketch);
createNewGrid.addEventListener("click", addNewGrid);

