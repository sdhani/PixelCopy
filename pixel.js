/*
 *  Table Manipulation Script
 */
/* FUNCTIONS */

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
  }
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
/* MAIN */

let initCells = false;
let initColor = false;
let myColor   = "Yellow"; /* need to get current color from dropdown */
let isDrawing = false;
let i = 0;

/* gather array of all cells */
const cells = document.getElementsByTagName("TD");
console.log(cells);

/*
 *  access each cell in array of cells
 *  listen for mouse events, modify cell color property for 
 *  mousedown and mousemove
//  * */
// for(let cell of cells){
document.getElementsByTagName("TD").addEventListener('mousedown',event => {
    isDrawing = true;
    modColor(cell,"Purple");
});

document.getElementsByTagName("TD").addEventListener('mousemove',event => {
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

/* remove 1 column to the end of the table*/
if(true === false){
    removeColumn();
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
document.getElementById('deleteColumn').addEventListener('click', function(){
  let columns = document.getElementsByTagName('tr');
  for(let row of columns){
    row.removeChild(row.firstChild);
  }
});

/* add 1 row at the end of the table */
document.getElementById('addRow').addEventListener('click', function() {
  let table = document.getElementById("myTable");
  let rows = Array.from(document.getElementsByTagName("TR"));
  let newRow = document.createElement("tr");      
          
  //goes up until the length of the rows
  for(let i = 0; i < rows[0].childElementCount; i++){ 
    newRow.appendChild(document.createElement("td"));
  }
  table.appendChild(newRow);     
});

/* delete 1 row at the end of the table */
document.getElementById('deleteRow').addEventListener('click', function(){
  document.getElementById("myTable").deleteRow(0);
});

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