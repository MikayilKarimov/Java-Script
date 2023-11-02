// let yas = Number(prompt("yasinizi giriniz"));

// if(yas>18){alert("ehliyyet ala bilirsiniz");}
// else if(yas>=13 && yas<=18){
//     alert("Gençsiniz! İlerleyen yıllarda ehliyet alabilirsiniz.")
// }
// else if(yas<13){
//     alert("Üzgünüz, ehliyet almak için henüz çok gençsiniz");
// }
// else{alert("yasiniz ehliyyete uygun deyil");}

let benzin = 10;
let dizel = 15;
let tok = 5;
let nextLine = "\r\n";
let card = 4169;
let balans = 1000;

let litr = Number(prompt("nece litr olsun ?"));
let account = Number(prompt("Kart hesabınızı girin !"));


if(account == 4169){
    let  odenecekmebleg = benzin*litr;
    let yancagnovu = prompt("Yancag novlerimiz" + nextLine
    + "1-Benzin" + nextLine
    + "2-Dizel" + nextLine
    + "Tok" + nextLine
    + "Hansinnan istiyirsiz ?");

    if(yancagnovu == "1"){alert("Odediyiniz mebleg :" +  odenecekmebleg + nextLine
    + "Cari balansiniz :" + (balans - odenecekmebleg));}

    else if (yancagnovu == "2"){
        let  odenecekmebleg = dizel*litr;
        alert("Odediyiniz mebleg :" +  odenecekmebleg + nextLine
    + "Cari balansiniz :" + (balans - odenecekmebleg));}

    else if (yancagnovu == "3"){
        let odenecekmebleg = tok*litr;
        alert("Odediyiniz mebleg :" + odenecekmebleg + nextLine
        + "Cari balansiniz :" + (balans-odenecekmebleg));

    }

}

else{alert("Kart hesabı yanlışdır !");
}