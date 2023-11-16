/* Creating new button with appendChild...............*/ 
let button = document.querySelectorAll("button")[1].parentElement;
console.log(button);

let creatButton = document.createElement("button");
creatButton.id="secondButton";
creatButton.className="btn btn-dark btn-sm mt-3";
creatButton.type="#";
creatButton.target="_blank";
creatButton.innerHTML="New Button";
creatButton.style.borderRadius="5%";
creatButton.style.float="right";

button.appendChild(creatButton);

/*Creating new H6 and inside close icon */

let todoParent = document.querySelector("#footer");
console.log(todoParent);

let todo5 = document.createElement("h6");
todo5.innerHTML="ToDo5";



todoParent.appendChild(todo5);
console.log(todoParent);


/*New close icon inside new h6 */
let newH6 = document.querySelectorAll("h6")[4];
console.log(newH6);

let icon = document.createElement("i");
icon.className="fa-solid fa-circle-xmark";
newH6.appendChild(icon);



let end = document.querySelector("#end");
end.style.marginTop="60px";

/*Remove elemet vith remove() */


let header = document.querySelector(".header").remove();
console.log(header);

/*Cread new header */

let container = document.querySelector("#container");
console.log(container);

let newHeaderDiv = document.createElement("div");
 newHeaderDiv.id="newHeaderId";
 newHeaderDiv.className="newHeaderClassName d-block w-100";
 newHeaderDiv.innerHTML="New Title : Todo Lists";
 newHeaderDiv.style.textAlign="center";
 newHeaderDiv.style.color="red"
 newHeaderDiv.style.backgroundColor="yellow";
 newHeaderDiv.style.marginTop="20px";

container.insertBefore(newHeaderDiv, container.firstChild);

let selectNewHeader = document.querySelector("#newHeaderId");
console.log(selectNewHeader);
    let createNewHr = document.createElement("hr");
createNewHr.style.color="green";
createNewHr.style.fontWeight="100px";

selectNewHeader.appendChild(createNewHr);

let body = document.querySelector(".body");
body.style.marginTop="30px";