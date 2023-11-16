// let selectButton = document.querySelectorAll("button")[0];

// selectButton.addEventListener("click",run);

// function run (e){
// selectButton.style.backgroundColor="green";

// }


// let selectButton = document.querySelectorAll("button")[0];

// selectButton.addEventListener("dblclick",run);

// function run (e){
// selectButton.style.backgroundColor="green";

// }


let selectButton = document.querySelectorAll("button")[0];

selectButton.addEventListener("click",run);

function run (e){
selectButton.style.backgroundColor="green";

}


/**ayin tarixini gostersin click edende */
let header = document.querySelector(".header");
console.log(header);

header.addEventListener("click", runs);

function runs(e){
header.innerHTML=new Date();

}


