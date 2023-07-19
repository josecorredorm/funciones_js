
// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }


// Punto 3.2
// let ele = document.getElementById("ele1") 
// ele.addEventListener("click", ()=> pintar(ele))
//     function pintar (element){ 
//     element.style.backgroundColor = 'yellow';
// });
// Punto 3.3
let ele = document.getElementById("ele1") 
ele.addEventListener("click",()=> pintar(ele,'yellow'))
    function pintar (element,color = 'green'){
    element.style.backgroundColor =color;
    }