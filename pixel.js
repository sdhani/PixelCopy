/*
 *  Table Manipulation Script
 */
/* FUNCTIONS */


/* Table Expansion and Contraction Functions */

/* add 1 column at the end of the table */
document.getElementById('addColumn').addEventListener('click', function(){
  let table = document.getElementById("myTable");  
  let rows = document.getElementsByTagName('tr');
  let newRow = document.createElement('tr');      
  
  if(rows[0] != undefined){
    for(let row of rows){
      // let newCol = document.createElement('td');
      // row.appendChild(newCol);
      row.insertCell(0);
    } 
  }else {/*Edge case, add first Node */
    newRow.appendChild(document.createElement('td'));
    table.appendChild(newRow);
  }
});

/* remove 1 column at the end of the table */
document.getElementById('deleteColumn').addEventListener('click', function(){
  let rows = Array.from(document.getElementsByTagName('tr'));  
  console.log("Delete column: ", rows[0] != undefined);
  
  // console.log("CELL DELETE", rows[0].deleteCell(0));
  // console.log("ROWS ", rows[0]);

  if(rows[0].childElementCount > 0){
    for(let row of rows){
      row.deleteCell(0);
    }
  }
});

/* add 1 row at the end of the table */
document.getElementById('addRow').addEventListener('click', function() {
  let table = document.getElementById("myTable");
  let rows = Array.from(document.getElementsByTagName('tr'));
  let newRow = document.createElement('tr');      
  
  // goes up until the length of the rows
  if(rows[0] != undefined){
    for(let i = 0; i < rows[0].childElementCount; i++){ 
      newRow.appendChild(document.createElement('td'));
      table.appendChild(newRow);     
    }
  }else{ // Edge case, add first Node
    newRow.appendChild(document.createElement('td'));
    table.appendChild(newRow);
  }
});

/* delete 1 row at the end of the table */
document.getElementById('deleteRow').addEventListener('click', function(){
  let rows = Array.from(document.getElementsByTagName('tr'));  
  let table = document.getElementById("myTable");
  
  if(rows[0] != undefined){
    table.deleteRow(0);
  }
});

/* Drawing Functions */

/**
 *  access each cell in array of cells
 *  listen for mouse events, modify cell color property for 
 *  mousedown and mousemove
 * */
let beginDraw = () => {
  for(let cell of cells){

      cell.addEventListener('mousedown',event => {
          isDrawing = true;
          console.log(cell);
          console.log(cells.length);
          modColor(cell,"#ffcf40");
      });

      cell.addEventListener('mousemove',event => {
          if(isDrawing){
              modColor(cell,"#ffcf40");
          }
      });

      cell.addEventListener('mouseup',event => {
          if(isDrawing){
              isDrawing = false;
          }
      });

      const allCells = document.getElementsByTagName('td');
  }
} 

/* MAIN */

let initCells = false;
let initColor = false;
let myColor   = "Yellow"; /* need to get current color from dropdown */
let isDrawing = false;
let i = 0;

/* gather array of all cells */
const cells = document.getElementsByTagName('td');
console.log(cells);

/*
 *  access each cell in array of cells
 *  listen for mouse events, modify cell color property for 
 *  mousedown and mousemove
 */

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

/* remove 1 column to the end of the table*/
if(true === false){
  removeColumn();
}
/* Color Mod Functions */

/* change color of cell based on input */
let modColor = (loc,clr) => {
  loc.style.backgroundColor = clr;
}

/* helper to grab current color value */
let allColorHelper = () => {
  //get current color
  allColor("#adcfe6");
}

/* change color of all cells based on input */
let allColor = (clr) => {
  for(let cell of cells){
    modColor(cell,clr);
  }
}

/* helper to grab current color value */
let remColorHelper = () => {
  //get current color
  remColor("#FFC0CB");
}

/* change color of all cells based on input */
let remColor = (clr,def) => {
for(let cell of cells){
  if(cell.style.backgroundColor == "gainsboro"){
    console.log("true");
      modColor(cell,clr);
    }
  }
}

 /* clear color of all cells to default  */
if(false === initColor){
  allColor("gainsboro");
  initColor = true;
}

/* listen for mouse event */
document.onmousemove = function(){
  beginDraw();
};