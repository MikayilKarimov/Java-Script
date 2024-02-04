// class objectProgrammig {
//     constructor(ad,soyad,is,maas){
//     this.name=ad;
//     this.lastName=soyad;
//     this.jobs=is;
//     this.salary=maas;
//     }
    
//     write(){if(this.salary="20"){console.log("dasdasdas")}}
// //  static topla(a,b){console.log(a+b)}
 
//  cixma(a,b){console.log(a-b)}

// //  static vurma(a,b){console.log(a*b)}
//  bolme(a,b){console.log(a/b)}

//     }
    

//     let object1 = new objectProgrammig("mikayil","kerimov","freelance","600");
//     let object2 = new objectProgrammig("elmar","mustafayev","aeropot","800")
//     let object3 = new objectProgrammig("vahid","kabulzade","herb","2000");
//     let object4 = new objectProgrammig("nofel","ebiyev","aspaz","700");
//     let object5 = new objectProgrammig("emin","ebiyeb","aspaz","600");

//     /**..................... */
    
// //     class miras extends objectProgrammig{
// //         constructor(ad, soyad, is, maas) {
// //             super(ad, soyad, is, maas); // Üst sınıfın constructor'ını çağırma
// //         }
  
// //    writeInfo(){
// //     super.write()
// //    }

// //     }

// //     let miras1 = new miras("nana","bbb","ccc","")
// //  miras1.writeInfo()



//  class deneme extends objectProgrammig{
// constructor(){
//     super("eli","veli","dasd","20")
// }

// value(){
//     super.write()
// }

//  }

//  let deneme1 = new deneme();
//  deneme1.value()

/**............................................................................. */

class deneme{
 
tomorrow(){console.log("Deneme Tomorrow")}


static futbol(){console.log("Messi")}


see(){
    console.log("Emin")
}

    write(){
        console.log("Enes")
    }
}

let names = new deneme();
names.write();
names.see();


class miras extends deneme{
   
   extendss(){super.tomorrow()}
   
    morning(){console.log("Miras morning")}
}

let inherit = new miras();
inherit.morning();
inherit.extendss();
