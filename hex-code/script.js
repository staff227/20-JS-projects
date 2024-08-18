let hexColors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function changeHex(){
    let hexCode = ""
    
    for (let i = 0; i < 6; i++) {
        let hexIndex = Math.floor(Math.random() * hexColors.length)
        hexCode += hexColors[hexIndex]
    }
    console.log(hexCode)
    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + hexCode;
    document.querySelector(".hex").innerHTML = "#" + hexCode
}