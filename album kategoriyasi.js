let albom1 = {
    Musiqici : "No1",
    Albomu : "Kronik",
    Stream : 4.754195,
}

let albom2 = {
    Musiqici : "Khontkar",
    Albomu : "Pembe",
    Stream : 1.245148,
}
let albom3 = {
    Musiqici : "Ceza",
    Albomu : "Yerli Plaka",
    Stream : 28.457451,
}
let albom4 = {
    Musiqici : "Sagopa Kajmer",
    Albomu : "Sarkastik",
    Stream : 20.267852,
}
let albom5 = {
    Musiqici : "Ezhel",
    Albomu : "Lights Out",
    Stream : 30.456753,
}
let albom6 = {
    Musiqici : "Uzi",
    Albomu : "Kan",
    Stream : 95.897654,
}

let albomlar=[albom1,albom2,albom3,albom4,albom5,albom6];



let searchButton = prompt("Hangi albomu aratmak istersiniz ?");
let newArray = [];

dondurulmusDeyer(albomlar);
// yazdirilmisDeyer(newArray);


function dondurulmusDeyer(albomlar){

albomlar.forEach(function(albom){
    if(albom.Albomu.toUpperCase().includes(searchButton.toUpperCase(),0)){newArray.push(albom);
        console.log("--------------------");
        console.log("|" + albom.Musiqici + "|" + albom.Albomu + "|" + albom.Stream);
        console.log("---------------------"); }
});

}

// function yazdirilmisDeyer(albom){

// albom.forEach(function(albom){
//     console.log("--------------------");
//     console.log("|" + albom.Musiqici + "|" + albom.Albomu + "|" + albom.Stream);
//     console.log("---------------------");
// });

// }