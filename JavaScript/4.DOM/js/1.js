const light = document.getElementById("light");
const h1 = document.getElementById("h1");

function turnOn() {
    light.src = "img/on.jpg";
}

function turnOff() {
    light.src = "img/off.jpg";
}

function changeTitle() {
    h1.innerHTML = "Hello JavaScript";
}

var isOn = false;
function f() {
    if (isOn){
        turnOff();
        isOn = false;
    }else {
        turnOn();
        isOn = true;
    }
}
