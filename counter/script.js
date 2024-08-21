let count = 0;

function increase() {
  count++;
  document.querySelector(".count").innerHTML = count;
}

function decrease() {
    count--;
    document.querySelector(".count").innerHTML = count;
}
