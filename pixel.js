let changeColor = () => {
    let cells = document.getElementsByTagName("TD");

    for(let cell of cells){
        if(cell.addEventListener('mousedown',function(){
            if(cell.addEventListener('mouseup',function(){
                cell.style.backgroundColor = "red";

            
            }));
        }));

    }
}
changeColor();

let addRow = () =>
{
    let button = document.getElementById('addRow');
    let table = document.getElementById("myTable");
    let rows = Array.from(document.getElementsByTagName("TR"));
    let p_prime = rows[0].cloneNode(true);
    
    
            let newRow = document.createElement("tr");
          
            let newCell = document.createElement("td"); //inside the tr
            
        for(let i =0; i < rows[0].childElementCount; i++) //goes up until the length of the rows
       {
            newRow.appendChild(document.createElement("td"));
        }

            table.appendChild(newRow);     
}

let deleteRow = () =>
{
    document.getElementById("myTable").deleteRow(0);


}


