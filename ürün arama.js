// let urun1 = {
//     Bilgisayar : "Hp Pavilion",
//     Kategori : "Teknoloji",
//     Fiyati : 4000,
// }

// let urun2 = {
//     Bilgisayar : "lenova Thikpad",
//     Kategori : "Teknoloji",
//     Fiyati : 6000,
// }

// let urun3 = {
//     Bilgisayar : "Leonova Ipad",
//     Kategori : "Teknoloji",
//     Fiyati : 4.458,
// }

// let urun4 = {
//     Bilgisayar : "Hp Victus",
//     Kategori : "Teknoloji",
//     Fiyati : 15.000,
// }

// let urun5 = {
//     Bilgisayar : "Acer declarus",
//     Kategori : "Teknoloji",
//     Fiyati : 9.458,
// }

// let urunler = [urun1,urun2,urun3,urun4,urun5];
// let filtreliUrunler = [];
// let KullaniciAradigiUrun = prompt("Aradiginiz urunun adini yazin");

// FiltreliUrunleriDoldur(urunler);
// filtreliUrunleriYazdir(filtreliUrunler);

// function FiltreliUrunleriDoldur (urunler){
//     urunler.forEach(function(urun){
//         if(urun.Bilgisayar.toLocaleUpperCase().includes(KullaniciAradigiUrun.toLocaleUpperCase(),0))
//         {filtreliUrunler.push(urun);}
//     });
// }

// function filtreliUrunleriYazdir (urunler){
//     urunler.forEach(function(urun){
// console.log("----------------------------------------------------");
//         console.log("|" + urun.Bilgisayar + "|" + urun.Kategori + "|" + urun.Fiyati);
//         console.log("----------------------------------------------------");
//     });
// }


let urun1 = {
    Bilgisayar : "Hp Pavilion",
    Kategori : "Teknoloji",
    Fiyati : 4000,
}

let urun2 = {
    Bilgisayar : "lenova Thikpad",
    Kategori : "Teknoloji",
    Fiyati : 6000,
}

let urun3 = {
    Bilgisayar : "Lenova Ipad",
    Kategori : "Teknoloji",
    Fiyati : 4.458,
}

let urun4 = {
    Bilgisayar : "Hp Victus",
    Kategori : "Teknoloji",
    Fiyati : 15.000,
}

let urun5 = {
    Bilgisayar : "Acer declarus",
    Kategori : "Teknoloji",
    Fiyati : 9.458,
}

let urunler = [urun1,urun2,urun3,urun4,urun5];
let KullaniciAradigiUrun = prompt("Aradiginiz urunun adini yazin");

dondurulmusDeyer=[];
urunuDoldur(urunler);
yazdirilmisDeyer(dondurulmusDeyer);


function urunuDoldur (urunler){
urunler.forEach(function(urun){
   
        if(urun.Bilgisayar.toUpperCase().includes(KullaniciAradigiUrun.toUpperCase(),0))
        {dondurulmusDeyer.push(urun);}
    
})
}

function yazdirilmisDeyer (urun){
    urun.forEach(function(urun){
        console.log("----------------");
        console.log("|" + urun.Bilgisayar + "|" + urun.Kategori + "|" + urun.Fiyati);
        console.log("-------------------")
    })
}

