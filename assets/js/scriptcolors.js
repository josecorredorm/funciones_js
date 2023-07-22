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
        if(!document.querySelector(".NewSpan")){
            CreateText(idevent.key);
        }
        else{
            ModText(idevent.key);
        }
        }
    else if (idevent.key === 's' || idevent.key === 'S') {
        ColorF = "orange";
        if(!document.querySelector(".NewSpan")){
            CreateText(idevent.key);
        }
        else{
            ModText(idevent.key);
        }
        }
    else if (idevent.key === 'd' || idevent.key === 'D') {
        ColorF = "skyblue";
        if(!document.querySelector(".NewSpan")){
            CreateText(idevent.key);
        }
        else{
            ModText(idevent.key);
        }
        }
    else if (idevent.key == 'q' || idevent.key =='Q'){
        if (bandera == 0){
                bandera = 1;
                CreateDiv("yellow");
                if(!document.querySelector(".NewSpan")){
                    CreateText(idevent.key);
                }
                else{
                    ModText(idevent.key);
                }
            }
        else{
                let newDiv =document.querySelector(".newDiv");
                Fondo("yellow",newDiv);
                ModText(idevent.key);
            }
        }
    else if (idevent.key == 'w' || idevent.key =='W'){
        if (bandera == 0){
                bandera = 1;
                CreateDiv("blue");
                if(!document.querySelector(".NewSpan")){
                    CreateText(idevent.key);
                }
                else{
                    ModText(idevent.key);
                }
            }
        else{
                let newDiv =document.querySelector(".newDiv");
                Fondo("blue",newDiv);
                ModText(idevent.key);
            }
        }
    else if (idevent.key == 'e' || idevent.key =='E'){
        if (bandera == 0){
                bandera = 1;
                CreateDiv("brown");
                if(!document.querySelector(".NewSpan")){
                    CreateText(idevent.key);
                }
                else{
                    ModText(idevent.key);
                }
            }
        else{
                let newDiv =document.querySelector(".newDiv");
                Fondo("brown",newDiv);
                ModText(idevent.key);
            }
        }
    else{
        if(!document.querySelector(".NewSpan")){
            CreateText(idevent.key, "  no es valida, no reprensenta ninguna acción");
        }
        else{
            ModText(idevent.key, "  no es valida, no reprensenta ninguna acción");
        }
        
    }
    key.style.backgroundColor=ColorF;
}

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
function CreateText(TeclaSelect, Mensaje= " "){
    let newElement = document.createElement("p");
    newElement.classList.add("NewP");
    newElement.textContent= "Seleccionaste la letra ";
    document.querySelector(".container").appendChild(newElement);
    let NewP =document.querySelector(".NewP");
    NewP.style.marginTop ="30px";
    newElement = document.createElement("span");
    newElement.classList.add("NewSpan");
    newElement.textContent= TeclaSelect + Mensaje;
    document.querySelector(".container").appendChild(newElement);
    let NewSpan =document.querySelector(".NewSpan");
    NewSpan.style.marginTop ="30px";
}
function ModText(TeclaSelect, Mensaje = " "){
    let NewSpan =document.querySelector(".NewSpan");
    NewSpan.innerHTML = TeclaSelect + Mensaje;
}

function Fondo(colorini= "white",idbox){
    if (idbox.style.backgroundColor == colorini && (idbox == box1 || idbox == box2 || idbox == box3 || idbox == box4)){
        idbox.style.backgroundColor = "Black";
    }
    else {
    idbox.style.backgroundColor = colorini;}
}

