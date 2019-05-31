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

let addColumn = () => {
    let columns = document.getElementsByTagName('tr');
    let addCol = document.getElementById('addColumn');

    for(let row of columns){
        addCol.addEventListener('click', function(){
            let newCol = document.createElement("td");
            row.appendChild(newCol);
        });
    }
}

addColumn();

let removeColumn = () => {
    let columns = document.getElementsByTagName('tr');
    let removeCol = document.getElementById('subtractColumn');
    

    for(let row of columns){
        removeCol.addEventListener('click', function(){
            row.removeChild(row.firstChild);
            // let newCol = document.createElement("td");
            // row.appendChild(newCol);
        });
    }
}

removeColumn();