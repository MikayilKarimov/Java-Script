function salam (){
console.log("salam")

}

salam() /**normalda belə yazardığ funksiyanı */

let sagol = () => {
    console.log("sagol");
};
sagol();
//bu arrow functiondur!!!!

let reqemler = () =>{
    console.log("1,2,3,4,5,6,7,8,9,10")
}

reqemler();
//Suslu parantezsiz yazilir bir setir olanda

let toplama = (a,b)=>{console.log(a+b)}

toplama(5,6);


// basqa bir misal yazaq


let tamReqem = (a,b) =>{
if((a+b)%2==0){
    console.log("reqem cutdur ")}
else{console.log("reqem tekdir")}
}


tamReqem(12,6);
//

let names = (firstname) =>{console.log(firstname)}

names("elmar")
//////////////////////////////////////////////////////////

let lastName = () =>  console.log("Kerimov")
lastName();

//////////////////////////////////////////////

/**iki parametr verecem */


let cixma = (a,b) => console.log(a-b)
cixma(7,25);
cixma(12,5);
cixma(7,125);

/*tek paramet girecem ve () yazmayacam */

let ad = isim => console.log(isim);

ad("mikayil");

/**//////////////////////////////////////////////////// */
 
let musiqi = musiqiname => console.log(musiqiname);
musiqi("no1");

/**//////////////////////////////////////////////// */
//pushlamagi yoxlayacam

let dizi = [];

let dizim = (a,b)=> {
    dizi.push(a+b)
    console.log(a+b)}
 
    dizim(12,22);
    dizim(88,77);
    dizim(56,125);
    dizim(5,12);
    console.log(dizi);
