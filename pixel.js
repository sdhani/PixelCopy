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

