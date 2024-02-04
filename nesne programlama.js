// class objectProgrammig {
// constructor(ad,soyad,is,maas){
// this.name=ad;
// this.lastName=soyad;
// this.jobs=is;
// this.salary=maas;
// }



// }

// let object1 = new objectProgrammig("mikayil","kerimov","freelance","600");
// let object2 = new objectProgrammig("elmar","mustafayev","aeropot","800")
// let object3 = new objectProgrammig("vahid","kabulzade","herb","2000");
// let object4 = new objectProgrammig("nofel","ebiyev","aspaz","700");
// let object5 = new objectProgrammig("emin","ebiyeb","aspaz","600");
// console.log(object1)
// console.log(object2)
// console.log(object3)
// console.log(object4)
// console.log(object5)


// let arr = [object1,object2,object3,object4,object5]

// let filteredObject = arr.filter(item => item.lastName === "kabulzade");
// console.log(filteredObject);


// let maps = new Map ()
// // maps.set(object1,"veri1")
// // maps.set(object2,"veri2")
// // maps.set(object3,"veri3")
// // maps.set(object4,"veri4")
// // maps.set(object5,"veri5")


// arr.forEach((obj, index) => {
//     maps.set(obj, index + 1); // Indeksleri 1'den başlattık
// });


// console.log(maps)


// /**...................................................... */
// // class newObject{
// //     constructor(yer,mekan,il,gun){
// //         this.location=yer;
// //         this.land=mekan;
// //         this.year=il;
// //         this.day=gun;
// //     }

// //    function parametr() {
// //     let yer = prompt("Yer gir");
// //     let mekan = prompt("Mekan gir");
// // let il = prompt("il gir");
// // let gun = prompt("Gun gir");   
// // return new newObject(yer,mekan,il,gun)
// // } 

// // }

// // cosnt veri = parametr()
// // console

// /**........................................................ */

// // class MagazaVerilerim {
// //     constructor(mehsul, qiymeti, miqdari) {
// //         this.product = mehsul;
// //         this.money = qiymeti;
// //         this.count = miqdari;
// //     }
// // }

// // function createObject() {
// //     let veri1 = prompt("Mehsulun adi:");
// //     let veri2 = parseFloat(prompt("Mehsulun qiymeti:"));
// //     let veri3 = parseInt(prompt("Mehsulun miqdari:"));

// //     return new MagazaVerilerim(veri1, veri2, veri3);
// // }

// // let userData = createObject();
// // console.log(userData);


// class objectProgrammig {
// constructor(ad,soyad,is,maas){
// this.name=ad;
// this.lastName=soyad;
// this.jobs=is;
// this.salary=maas;
// }


// }

// function user() {
//     let userName = prompt("adinizi giriniz")
//     let userLastName = prompt("soyadinizi giriniz")
// let userJob = prompt("isinizi giriniz")
// let userSalary = prompt("maasinizi giriniz") 
// return new objectProgrammig(userName,userLastName,userJob,userSalary)

// }

// let newUser = user();

// // Dönen nesneyi alert ile göster
// alert("Ad: " + newUser.name + "\nSoyad: " + newUser.lastName + "\nİş: " + newUser.jobs + "\nMaaş: " + newUser.salary);

// let mmm = new objectProgrammig("mm","mmm","mmmm","4444")
// console.log(mmm)
// let value = user()
// console.log(value)


/**Burda 1cisi class və içində hər hansı bir constructor tanımladığ
 * sonra başqa bir funksiya yaratdım və promptdan məlumat aldım
 * sonra return  new edərək buları yaratdığım class içinə atdımki nesne kimi programlaya bilim
 * 
 *sonra bu funksiyanı çalışdırdım.
 cosnolda görüm deyədə let edib atadım
 Yəni burdaki this.name falan funksiyaya adiyyatı yoxdu.
 Buları yazdığki class içində nəsə olsunki funksiyanı nense olarağ kodlaya bilək
 */

/**.................................................................................... */

class nesneProgramlama {
constructor(model,qiymet,olke){
    this.models=model;
    this.valuary=qiymet;
    this.country=olke;
}


functions(){
    console.log(`Model : ${this.models} 
    Fiyati : ${this.valuary} 
    Olke : ${this.country}`)
}



}

let user = new nesneProgramlama("hunday","20000","almanysa");
user.functions();

let user2 = new nesneProgramlama("mercedes","500K","Almanya")
user2.functions();