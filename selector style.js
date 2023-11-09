let value = document.querySelectorAll("button")[0].innerText="ToDo Eklendi";
console.log(value);
 
let todolist = document.querySelector("#button2");
console.log(todolist);
todolist.style.color="red";
todolist.style.backgroundColor="green";
todolist.style.padding="10px";
todolist.style.marginLeft="100px"
todolist.style.float="right";


let h6 = document.querySelectorAll("h6:nth-of-type(odd)");

// Seçilen h6 öğelerinin arka plan rengini gri yap
h6.forEach(function(item) {
  item.style.backgroundColor = "grey";
});

let icon = document.querySelectorAll("i:nth-of-type(odd)");
console.log(icon);

icon.forEach(function(iccon,index){
    if(index%2==1){
    iccon.style.color="black"}
});