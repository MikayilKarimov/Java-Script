let select = document.querySelector("input");

select.addEventListener("keyup",run);

function run (e){
sessionStorage.setItem("verilerim",e.target.value)

}