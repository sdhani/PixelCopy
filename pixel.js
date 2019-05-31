let changeColor = () => {
    /*let table = document.getElementById('myTable');*/
    let cells = document.getElementById('test');
    console.log(cells);

    for(let cell of cells){
        alert("here");
        let cellColor = cell.getAttribute('background-color');
        cell.style.color = "red";
    }
}

changeColor();