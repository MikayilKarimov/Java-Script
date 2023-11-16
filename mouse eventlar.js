// document.addEventListener("DOMContentLoaded",run);

// function run (e){
//     alert("sayfa yenilendi")
// }




/**maoseover  googleda consolda duz gosteriri */
// let select = document.querySelector("#footer");
// console.log(select)
// select.addEventListener("mouseover",runs);

// function runs (e){
//     console.log(e.type)
// }


let select = document.querySelector("#footer");
let input = document.querySelector("input");

select.addEventListener("mouseenter",runss);
input.addEventListener("mouseout",runss)

function runss(e){

    console.log(e.type)
}

