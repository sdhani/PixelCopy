/**
 *  Table Manipulation Script
 */

/* FUNCTIONS */

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
            modColor(cell,"#ffcf40");  //light pink color
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
let modColor = (loc,myColor) => {
    loc.style.backgroundColor = myColor;
}

/* helper to grab current color value */
let allColorHelper = () => {
    //get current color
    allColor("#adcfe6");       //light blue color
}

/* change color of all cells based on input */
let allColor = (myColor) => {
    for(let cell of cells){
        modColor(cell,myColor);
    }
}

/* helper to grab current color value */
let remColorHelper = () => {
    //get current color
    remColor("#FFC0CB");    //light pink 
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

/* Table Expansion and Contraction Functions */

/* add 1 column at the end of the table */
let addColumn = () => {
    //document.getElementById('addColumn').addEventListener('click', function(){
    let rows = document.getElementsByTagName('tr');
    for(let row of rows){
        let newCol = document.createElement("td");
        row.appendChild(newCol);
        modColor(newCol,"gainsboro");
    }
    //});
}

/* remove 1 column at the front of the table */
let deleteColumn = () => {
    //document.getElementById('deleteColumn').addEventListener('click', function(){
    let columns = document.getElementsByTagName('tr');
    for(let row of columns){
        row.removeChild(row.firstChild);
    }
    //});
}

/* add 1 row at front of the table */
let addRow = () => {
    //let button = document.getElementById('addRow');
    let table = document.getElementById("myTable");
    let rows = Array.from(document.getElementsByTagName("TR"));
    //let p_prime = rows[0].cloneNode(true);
    let newRow = document.createElement("tr");      
    //let newCell = document.createElement("td"); //inside the tr
            
    //goes up until the length of the rows
    for(let i =0; i < rows[0].childElementCount; i++){ 
        newRow.appendChild(document.createElement("td"));
        modColor(newRow,"gainsboro");
    }
    table.appendChild(newRow);
    //console.log(cells);
}

/* delete 1 row at the front of the table */
let deleteRow = () => {
    document.getElementById("myTable").deleteRow(0);
}

/* MAIN */

let initCells = false;
let initColor = false;
let myColor; //updated each time colorCollector runs
//let myColor   = document.getElementById("color"); /* need to get current color from dropdown */  //changed this from "Yellow"
let isDrawing = false;
let i = 0;

/* gather array of all cells */
const cells = document.getElementsByTagName("TD");
console.log(cells);

/* clear color of all cells to default  */
if(false === initColor){
    allColor("gainsboro");
    initColor = true;
}

/* listen for mouse event */
document.onmousemove = function(){
    beginDraw();
};







