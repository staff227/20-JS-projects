let display = document.querySelector(".solution");
let figures = "";
let results = 0;
function append(){
    display.innerHTML = figures
}

function calculate(){
    figures = eval(figures)
}



function del(){
    if(typeof(figures) === "string"){
        let newFig = figures.slice(0, figures.length - 1);
        figures = newFig

        
    }else{
        figures = ""
    }
}