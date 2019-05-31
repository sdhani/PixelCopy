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

/* add 1 column at the end of the table */
document.getElementById('addColumn').addEventListener('click', function(){
  let rows = document.getElementsByTagName('tr');
  for(let row of rows){
    let newCol = document.createElement("td");
    row.appendChild(newCol);
  } 
});

/* remove 1 column at the end of the table */
document.getElementById('subtractColumn').addEventListener('click', function(){
  let columns = document.getElementsByTagName('tr');
  for(let row of columns){
    row.removeChild(row.firstChild);
  }
});

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
