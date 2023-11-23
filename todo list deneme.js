


//...............................................
let inputDiv = document.querySelector(".body");
let input = document.querySelector(".inputFirst");
let footer = document.querySelector("#footer");
let buttonFirst = document.querySelector("#button1");
let buttonSecond = document.querySelector("#button2");
let storage;


runAllFunction();

function runAllFunction() {
    buttonFirst.addEventListener("click", addNewTodoForScreen);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    footer.addEventListener("click",deleteIconForUi)
}

function deleteIconForUi (e){
if(e.target.className="fa-solid fa-circle-xmark"){
    const h = e.target.parentElement;
    h.remove();}
}

function pageLoaded() {
    storage = JSON.parse(localStorage.getItem("Input ekleme butonu :") || "[]");
    storage.forEach(function (item) {
   
        
        
        let h6 = document.createElement("h6");
        h6.textContent = item;

        let i = document.createElement("i");
        i.className = "fa-solid fa-circle-xmark";
        let hr = document.createElement("hr");

        footer.appendChild(h6);
        h6.appendChild(i);
        h6.appendChild(hr);
    });
}

function addNewTodoForScreen(e) {
    e.preventDefault();
    let UserInputData = input.value.trim();
    if (UserInputData === "" || UserInputData === null) {
        alertFunction("warning", "Bir işlem giriniz");
        return;
    }
    let h6 = document.createElement("h6");
    h6.textContent = UserInputData;

    let i = document.createElement("i");
    i.className = "fa-solid fa-circle-xmark";
    let hr = document.createElement("hr");

    footer.appendChild(h6);
    h6.appendChild(i);
    h6.appendChild(hr);
    input.value = "";

    addLocalStorage(UserInputData);
}

function alertFunction(type, message) {
    let buttonDiv = document.querySelector(".button");
    let newDiv = document.createElement("div");
    newDiv.className = "alert alert-" + type;
    newDiv.textContent = message;
    buttonDiv.appendChild(newDiv);

    setTimeout(() => {
        newDiv.remove();
    }, 2500);
}

function addLocalStorage(UserInputData) {
    let storageArray = JSON.parse(localStorage.getItem("Input ekleme butonu :") || "[]");

    storageArray.push(UserInputData);
    localStorage.setItem("Input ekleme butonu :", JSON.stringify(storageArray));
}







// let alertFunction = (type,message) =>{
//     let buttonDiv = document.querySelector(".button")
//     let newDiv = document.createElement("div")
//     newDiv.className="alert alert-"+type;
//     newDiv.textContent=message;
//     buttonDiv.appendChild(newDiv);

//     setTimeout(() => {
//         newDiv.remove()
//     }, 2500);
// }

// let addNewTitle = (e) => {

//     const inputText = input.value.trim();
//     if (inputText == null || inputText == "") {
//        alertFunction("warning","Bir islem giriniz")
//     } else {
//         input.value = "";
//         addLocalStorage(inputText); // inputText değerini fonksiyona geçirin
//         let h6 = document.createElement("h6");
//     h6.textContent = input.value.trim();

//     let i = document.createElement("i");
//     i.className = "fa-solid fa-circle-xmark";
//     let hr = document.createElement("hr");

//     footer.appendChild(h6);
//     h6.appendChild(i);
//     h6.appendChild(hr);

//     }

//     e.preventDefault();
// }

// buttonFirst.addEventListener("click", addNewTitle);

// function addLocalStorage(inputText) {
//     const storageKey = "Input ekleme butonu :";
//     let storageArray = JSON.parse(localStorage.getItem(storageKey) || "[]");

//     storageArray.push(inputText);
//     localStorage.setItem(storageKey, JSON.stringify(inputText));
// }


