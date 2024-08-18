let counter = 0;

function changeColor() {
    let colors = ["white", "black", "green", "yellow", "indigo", "orange", "blue", "purple", "red", "pink"]
    let body = document.getElementsByTagName("body")[0].style.backgroundColor = colors[counter]
    counter++;
    if(counter > colors.length - 1){
        counter = 0;
    }
}