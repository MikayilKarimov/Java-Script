/*Children */

// let containerDiv = document.querySelector("#container");
// console.log(containerDiv);

// let containerChild = containerDiv.children[1].children[0];
// console.log(containerChild);

// containerChild.setAttribute("placeholder", "Soyadınızı yazın")
// containerChild.style.backgroundColor="yellow";

// let todoList = document.querySelector("#footer");
// console.log(todoList);

// let footerChild = todoList.children[0];
// console.log(footerChild);

// footerChild.style.backgroundColor="green";
// footerChild.style.fontSize = "30px";
// footerChild.style.color="white";
// footerChild.style.borderRadius="20%";
// footerChild.style.textAlign="center";

// let todoList2 = todoList.children[4];
// console.log(todoList2);

// todoList2.style.backgroundColor="green";
// todoList2.style.fontSize = "30px";
// todoList2.style.color="white";
// todoList2.style.borderRadius="20%";
// todoList2.style.textAlign="center";

// let footer2 = document.querySelector("#footer");
// console.log(footer2);
// let footer2Height = footer2.style.height="283px"


/* Parent..................*/

// let icon = document.querySelectorAll("i")[0];
// console.log(icon);

// let iconParent = icon.parentElement.parentElement.parentElement;
// console.log(iconParent);

// let iconParentStyle = iconParent.style.background="orange";
// let h6 = document.querySelectorAll("h6");
// console.log(h6);

// let h6Style=h6.forEach(function(colors){
// colors.style.color="green";
// });


// let listelerim = document.querySelectorAll("h6")[2];
// console.log(listelerim);

// let Siblings = listelerim.nextSibling.nextSibling.nextSibling;
// console.log(Siblings);

let footer = document.querySelector("#footer");
console.log(footer);

let footerPreviousElementSiblings = footer.previousElementSibling;
console.log(footerPreviousElementSiblings);


let foot = document.querySelector("#end");
console.log(foot);
let footerPreviousSiblings = foot.previousSibling.previousSibling;
console.log(footerPreviousSiblings);
