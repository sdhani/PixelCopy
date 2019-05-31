/**
 *  Table Manipulation Script
 */


/* FUNCTIONS */

/* Color Mod Functions */

/* change color of cell based on input */
let modColor = (loc,col) => {
    loc.style.backgroundColor = col;
}

/* change color of all cells based on input */
let allColor = (col) => {
    for(let cell of cells){
        modColor(cell,col);
    }
}

/* Table Expansion and Contraction Functions */

/* add 1 column to the end of the table */
let addColumn = () => {
    let columns = document.getElementsByTagName('tr');
    let addCol  = document.getElementById('addColumn');

    for(let row of columns){
        addCol.addEventListener('click', function(){
            let newCol = document.createElement("td");
            row.appendChild(newCol);
        });
    }
}

/* remove 1 column to the end of the table */
let removeColumn = () => {
    let columns   = document.getElementsByTagName('tr');
    let removeCol = document.getElementById('subtractColumn');
    

    for(let row of columns){
        removeCol.addEventListener('click', function(){
            row.removeChild(row.firstChild);
            // let newCol = document.createElement("td");
            // row.appendChild(newCol);
        });
    }
}

/* MAIN */

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

/* add 1 column to the end of the table */
if(true === false){
    addColumn();
}

/* remove 1 column to the end of the table */
if(true === false){
    removeColumn();
}
