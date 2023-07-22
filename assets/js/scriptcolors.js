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
let bandera = 0;
document.addEventListener("keydown",DivChange);
function DivChange(idevent){
    if (idevent.key === 'a' || idevent.key === 'A') {
        ColorF = "pink";
        }
    else if (idevent.key === 's' || idevent.key === 'S') {
        ColorF = "orange";
        }
    else if (idevent.key === 'd' || idevent.key === 'D') {
        ColorF = "skyblue";
        }
    else if (idevent.key == 'q' || idevent.key =='Q'){
        if (bandera == 0){
                bandera = 1;
                CreateDiv("yellow");
            }
        else{
                let newDiv =document.querySelector(".newDiv");
                Fondo("yellow",newDiv)
            }
        }
    else if (idevent.key == 'w' || idevent.key =='W'){
        if (bandera == 0){
                bandera = 1;
                CreateDiv("blue");
            }
        else{
                let newDiv =document.querySelector(".newDiv");
                Fondo("blue",newDiv)
            }
        }
    else if (idevent.key == 'e' || idevent.key =='E'){
        if (bandera == 0){
                bandera = 1;
                CreateDiv("brown");
            }
        else{
                let newDiv =document.querySelector(".newDiv");
                Fondo("brown",newDiv)
            }
        }
    // else{
    //     alert("tecla no valida");
    // }
    key.style.backgroundColor=ColorF;
}
// document.addEventListener("keydown",NewDivElement);
// function NewDivElement (idevent){
    
// }

function CreateDiv(ColorDiv){
    const newElement = document.createElement("div");
    newElement.classList.add("newDiv");
    document.querySelector(".container").appendChild(newElement);
    let newDiv =document.querySelector(".newDiv");
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.border = "1px solid black";
    newDiv.style.margin ="30px";
    newDiv.style.backgroundColor = ColorDiv;
}



function Fondo(colorini= "white",idbox){
    if (idbox.style.backgroundColor == colorini){
        idbox.style.backgroundColor = "Black";
    }
    else {
    idbox.style.backgroundColor = colorini;}
}

