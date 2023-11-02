alert("Bankamiza hosgeldiniz");
let nextLine = "\r\n";
let anaSayfa = Number(prompt("Hangi islem olacak ?" + nextLine + nextLine
+ "1-Yeni bir banka hesabı oluşturmak" + nextLine + nextLine
+ "2-Varolan bir banka hesabına erişim sağlamak"));

if(anaSayfa == "1"){
  let userName=  prompt("adinizi giriniz");
let userSurname= prompt("Soyadinizi giriniz");
let card = prompt("Istediyin numarani yaz");

account(userName,userSurname,card);

function account (name,surname,card){
    alert("Hesabiniz olusturuldu !" + nextLine
    + "Buyurunuz,sizin hesab bilgileriniz" + nextLine
    + "Adiniz ve Soyadiniz :"  + (userName+ " " + userSurname) + nextLine
    + "card hesabiniz :" + card);
}
}
else if (anaSayfa == "2"){
    let cardhesab = Number(prompt("Kart hesabinizi giriniz !"));
    if(cardhesab == 4170){alert("Cari balansiniz : 1000 Azn")}
    else if (cardhesab == 4180){alert("Cari balaniniz : 2000azn");}
else if (cardhesab == 4190){alert("Cari balaniniz : 3000azn")}
else{alert("Dogru hesab girmediniz");}
}


else{alert("Dogru islem yapiniz");}