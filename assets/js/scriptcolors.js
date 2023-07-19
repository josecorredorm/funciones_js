let box1 = document.getElementById("box1");
box1.addEventListener("click",()=>Fondo("blue",box1));

let box2 = document.getElementById("box2");
box2.addEventListener("click",()=>Fondo("red",box2));

let box3 = document.getElementById("box3");
box3.addEventListener("click",()=>Fondo("green",box3));

let box4 = document.getElementById("box4");
box4.addEventListener("click",()=>Fondo("yellow",box4));

let key = document.getElementById("key");
let ColorF= "white";
document.addEventListener("keydown",Fondotecla);
function Fondotecla(idevent){
    if (idevent.key === 'a' || idevent.key === 'A') {
        ColorF = "pink";
        }
    else if (idevent.key === 's' || idevent.key === 'S') {
        ColorF = "orange";
        }
    else if (idevent.key === 'd' || idevent.key === 'D') {
        ColorF = "skyblue";
        }
    key.style.backgroundColor=ColorF;
}




function Fondo(colorini= "white",idbox){
    if (idbox.style.backgroundColor == colorini){
        idbox.style.backgroundColor = "Black";
    }
    else {
    idbox.style.backgroundColor = colorini;}
}

