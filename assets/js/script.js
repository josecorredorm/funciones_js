// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }
// let ele = document.getElementById("ele1") 
// ele.addEventListener("click", pintar);

// Punto 3.2
// let ele = document.getElementById("ele1") 
// ele.addEventListener("click", function(){
//     ele.style.backgroundColor = 'yellow';
// });
// Punto 3.3
let ele = document.getElementById("ele1") 
ele.addEventListener("click",()=> pintar('yellow'))
    function pintar (color = 'green'){
    ele.style.backgroundColor =color;
    }