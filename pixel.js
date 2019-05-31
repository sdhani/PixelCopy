/*
    Lawrence Castillo
*/

/* FUNCTIONS */

/* change color of cell based on input */
let modColor = (loc,col) => {
    loc.style.backgroundColor = col;
}

/**
 *  change color of all cells based on input
 * */
let allColor = (col) => {
    for(let cell of cells){
        modColor(cell,col);
    }
}

/* MAIN RUNTIME */

/* gather array of all cells */
const cells     = document.getElementsByTagName("TD");
let   myColor   = "Yellow"; /* need to get current color from dropdown */
let   isDrawing = false;

/**
 *  access each cell in array of cells
 *  listen for mouse events, modify cell color property for 
 *  mousedown and mousemove
 * */
for(let cell of cells){
    
    cell.addEventListener('mousedown',event => {
        isDrawing = true;
        modColor(cell,"Purple");
    });

    cell.addEventListener('mousemove',event => {
        if(isDrawing){
            modColor(cell,"Purple");
        }
    });

    cell.addEventListener('mouseup',event => {
        if(isDrawing){
            isDrawing = false;
        }
    });
}

/* clear color of all cells to default  */
if(true === false){
    allColor("gray");
}

/* clear color of all cells to default  */
if(true === false){
    allColor(myColor);
}