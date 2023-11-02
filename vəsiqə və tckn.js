

let ad = prompt("adinizi giriniz");
let tckn = prompt("tckn girin");

// deneme(ad,tckn);

// function deneme (ad , tckn){

//     if(ad!=""){
//         if(tckn.length >3){console.log("giris basarili");}
//         else{console.log("tckn 3 olmalidir !!");}
//     }


//     else{console.log("adi bs saxlama");}
// };

deneme2(ad,tckn);

function deneme2(ad,tckn){
if(ad==""){
    console.log("adi mutleq gir");
    return;
}
if(tckn.length<3){console.log("tckn minimum 3 olmalidir");
return;}

console.log("kayit basarili oldu");


}; /*iki funksiyada duz isdiyir*/ 