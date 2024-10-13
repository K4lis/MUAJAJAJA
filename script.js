const btnNO = document.querySelector("#btn-random");

function moverAleatoriamente(btn) {
    btn.style.fontWeight = "bolder";
    btn.style.position = "absolute";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

btnNO.addEventListener("mouseover", function (e) {
    moverAleatoriamente(btnNO);
});