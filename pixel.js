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
    colorCollector();

    for(let cell of cells){

        cell.addEventListener('mousedown',event => {
            isDrawing = true;
            console.log(cell);
            console.log(cells.length);
            modColor(cell,myColor);
        });

        cell.addEventListener('mousemove',event => {
            if(isDrawing){
                modColor(cell,myColor);
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

/* set myColor to the current selected color from the dropdown menu */
let colorCollector = () =>
{
    myColor = document.getElementById("color").value;
    //console.log(myColor);
    //loc.style.backgroundColor = myColor;
}

/* change color of cell based on input */
let modColor = (loc,clr) => {
    loc.style.backgroundColor = clr;
}

/* helper to grab current color value */
let allColorHelper = () => {
    //get current color
    allColor(myColor);
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
    remColor(myColor);
}

/* change color of all cells based on input */
let remColor = (clr) => {
    for(let cell of cells){
        if(cell.style.backgroundColor == "gainsboro"){
            modColor(cell,clr);
        }
    }
}

let initialFill = () => {
    for(let cell of cells){
        if(cell.style.backgroundColor == ""){
            modColor(cell,"gainsboro");
        }
    }
}

/* Table Expansion and Contraction Functions */


/* add 1 column at the end of the table */
let addColumn = () => {
//document.getElementById('addColumn').addEventListener('click', function(){
  let table = document.getElementById("myTable");  
  let rows = document.getElementsByTagName('tr');
  let newRow = document.createElement('tr');      
  
  if(rows[0] != undefined){
    for(let row of rows){
      // let newCol = document.createElement('td');
      // row.appendChild(newCol);
      row.insertCell(0);
      initialFill();
    } 
  }else {/*Edge case, add first Node */
    newRow.appendChild(document.createElement('td'));
    table.appendChild(newRow);
    initialFill();
  }
//});
}

/* remove 1 column at the end of the table */
let deleteColumn = () => {
//document.getElementById('deleteColumn').addEventListener('click', function(){
  let rows = Array.from(document.getElementsByTagName('tr'));  
  if(rows[0].childElementCount > 0){
    for(let row of rows){
      row.deleteCell(0);
    }
  }
//});
}

/* add 1 row at the end of the table */
let addRow = () => {
//document.getElementById('addRow').addEventListener('click', function() {
  let table = document.getElementById("myTable");
  let rows = Array.from(document.getElementsByTagName('tr'));
  let newRow = document.createElement('tr');      
  
  // goes up until the length of the rows
  if(rows[0] != undefined){
    for(let i = 0; i < rows[0].childElementCount; i++){ 
      newRow.appendChild(document.createElement('td'));
      table.appendChild(newRow);     
      initialFill();
    }
  }else{ // Edge case, add first Node
    newRow.appendChild(document.createElement('td'));
    table.appendChild(newRow);
    initialFill();
  }
//});
}

/* delete 1 row at the end of the table */
let deleteRow = () => {
//document.getElementById('deleteRow').addEventListener('click', function(){
  let rows = Array.from(document.getElementsByTagName('tr'));  
  let table = document.getElementById("myTable");
  
  if(rows[0] != undefined){
    table.deleteRow(0);
  }
//});
}

<<<<<<< HEAD
/* Drawing Functions */


/*determine the current selected color from the dropdown menu and set the global variable of myColor to that value*/
let colorCollector = () =>
{
    myColor = document.getElementById("color").value;
    console.log(myColor);
    //loc.style.backgroundColor = myColor;

}

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
=======
>>>>>>> 651c54aeb3b0718a1546c8914acffb27085b211b

/* MAIN */

let initCells = false;
let myColor   = "Red"; /* need to get current color from dropdown */
let isDrawing = false;
let i = 0;

/* gather array of all cells */
const cells = document.getElementsByTagName("TD");
console.log(cells);

/* listen for mouse event */
document.onmousemove = function(){
<<<<<<< HEAD
  beginDraw();
};
=======
    beginDraw();
};
>>>>>>> 651c54aeb3b0718a1546c8914acffb27085b211b
