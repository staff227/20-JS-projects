let message = document.querySelector("#message");
let render = document.querySelector(".render");

function submitt() {
    render.innerHTML = message.value
    message.value = ''
}