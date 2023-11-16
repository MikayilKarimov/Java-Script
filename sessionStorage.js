
/**məlumatları əlavə etdik  */
sessionStorage.setItem("names","Raul");

sessionStorage.setItem("ad :","vahid");

sessionStorage.setItem("Kullanici adi :" ,"elmar");

sessionStorage.setItem("dost","emruz");

/**melumat silmek.Key verirsen ve onu silir */
sessionStorage.removeItem("names");


/**melumati cagirmag */
let value = sessionStorage.getItem("ad :");
console.log(value);

let value2 = sessionStorage.getItem("Kullanici adi :");
console.log(value2);

let value3 = sessionStorage.getItem("names");
console.log(value2); 
//yuxarida names removeItem elemisik deye consolda raul gostermir

/**diziymis kimi gostermek.Dizi formasinda.Dizi elemek yox!! */


let diziler = ["elmar","raul","vahid"];
let likeArray = sessionStorage.setItem("dost",JSON.stringify(diziler))

/**burda tipi string oldu.Ama gorunusu array(dizi) */


/**ordaki melumatlari array(dizi) kimi almaq ucun
 * parseInt isdedirik
 */

let value4 =JSON.parse(sessionStorage.getItem("dost"));
console.log(value4);




//YENIDEN PROB ELEDIM
//1--MELUMATLARI SESSIONA YAZDIM
//2-- DIZIYMIS KIMI GOSTERDIM.99% bele isdedirler
//3--ISTIFADE EDMEK UCUN ARRAY A CEVIRDIM


let probArray = ["emruz","nazile","taci"];

let currentArrat = JSON.stringify(probArray);

let yazdir = sessionStorage.setItem("friends",currentArrat);
//yazdirdim sessiona


let select = sessionStorage.getItem("friends");
let diziyecevir = JSON.parse(select);
console.log(diziyecevir);

//dizi halina cevirdim


/**yeniden prob eledim */

let number = ["salam","sagol","elveda"];

let sada = JSON.stringify(number);

let resault = sessionStorage.setItem("users",sada);

let cconsole = sessionStorage.getItem("users");

console.log(cconsole);

/**propmptdan elemeyi yoxladim */

let prom = prompt("Bir yazi giriniz");

let sss = JSON.stringify(prom);

sessionStorage.JSON.parse(setItem("propmtdan melumat :",sss));



