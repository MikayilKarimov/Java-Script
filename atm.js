let card = 3000
let nextLine = "\r\n";
let siyahi = "1)Hesaninizi gorun" + nextLine
+ "2)Hesabinizi artirin" + nextLine
+ "3)Pulunuzu cixarin" + nextLine
+ "4)Exit"

let atm = Number(prompt(siyahi));

if(atm == "1"){
   let usermoney = Number(prompt("kart hesabi daxil edin"));
if(usermoney == "4169"){alert("cari balansiniz :" + card)}
else{alert("dogru hesabi giriniz")}
}

else if (atm == "2"){
    let add = Number(prompt("meblegi giriniz"));
    alert("Balansiniz ugurla artirildi" + nextLine
    + "Cari balansiniz :" + (card + add));
    
  
    
}

else if(atm == "3"){
    let exitmoney = Number(prompt("cixarmaq istediyiniz meblegi yaziniz"));
    if(exitmoney<card){alert("Pulunuz ugurla cixarildi" + nextLine
    + "cari balansiniz :" + (card - exitmoney));}
    else{alert("Emeliyyat duzgun deyil.Dogru mebleg girin" + nextLine
    + "cari balansiniz :" + card);}
}
else if (atm == "4")
{alert("cikis yapildi");}

else{alert("dogru islem yapiniz");}




