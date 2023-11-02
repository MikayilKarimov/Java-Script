let boy = Number(prompt("boyuvu gir"));
let kilo = Number(prompt("cekinizi giriniz"));

let sonuc = kilo/(boy*2);

if(sonuc<18.5){console.log("ideal kilonun altinda");}
else if(sonuc>= 18.5 && sonuc<=24.9){console.log("ideal kilo");}
else if (sonuc>=25 && sonuc<=29.9){console.log("obez");}
else if (sonuc>=30 && sonuc<=39.9){console.log("mega obez");}