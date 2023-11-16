let input = document.querySelector("input");
console.log(input);

input.addEventListener("focus",run)

function run (e){
    console.log(e.type)
}