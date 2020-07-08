let number = 1;

function carousel() {
    number ++;
    const img = document.getElementById("img");
    img.src = "img/img"+number+".jpg";
    if (number === 3){
        number = 0;
    }
}

setInterval(carousel, 3000);