const colorPalette = document.querySelector(".color-palette");
const blackBtn = document.querySelector(".black");
const whiteBtn = document.querySelector(".white");
const gridBtn = document.querySelector(".grid");
const eraseBtn = document.querySelector(".eraser");
const fillBtn = document.querySelector(".fill");
const canvas = document.querySelector(".canvas");
const main = document.querySelector("main");

function fillGrid(dimensions) {
    canvas.style.cssText = `grid-template-columns: repeat(${dimensions}, 1fr);`;
     for ( i= 0 ; i < dimensions*dimensions ; i++){
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        canvas.appendChild(pixel);
    }
}
function gridClear() {
    canvas.style.gridTemplateColumns = null;
    canvas.textContent = "" ;
}
function changeDimensions() {
    let dimensions = prompt("Insert the new dimensions, between 16 and 100.",16);
    if (isNaN(dimensions)) {
        alert("Llayn3el zzamlbok awld lm7wwya")
    } else if (dimensions < 16) {
        alert("nta fk zmla")
    } else if ( dimensions <= 100) {
        gridClear();
        fillGrid(dimensions);
    } else {
        alert("At7rg pc")
    }
    
}
gridBtn.addEventListener("click", changeDimensions)

function changeColor() {
    pixel.style.backgroundColor = "black"
}
canvas.addEventListener("mousedown",() => {
    const pixelArray = document.querySelectorAll(".pixel");
    for ( i=0 ; i<pixelArray.length ; i++ ) {
        pixelArray[i].addEventListener("mouseover", () => {
            pixelArray[i].style.backgroundColor = "black";
        })
    }
})

fillGrid(16);
