// class objectProgrammig {
//     constructor(ad,soyad,is,maas){
//     this.name=ad;
//     this.lastName=soyad;
//     this.jobs=is;
//     this.salary=maas;
//     }
    
//  static topla(a,b){console.log(a+b)}
 
//  cixma(a,b){console.log(a-b)}

//  static vurma(a,b){console.log(a*b)}
//  bolme(a,b){console.log(a/b)}

//     }
    
// let riyaziyyat = new objectProgrammig()
// let riyaziyyat2=new objectProgrammig()
// riyaziyyat2.bolme(402,2)
// riyaziyyat.cixma(40,10)

// objectProgrammig.topla(100,125)
// objectProgrammig.vurma(125,5)
//     let object1 = new objectProgrammig("mikayil","kerimov","freelance","600");
//     let object2 = new objectProgrammig("elmar","mustafayev","aeropot","800")
//     let object3 = new objectProgrammig("vahid","kabulzade","herb","2000");
//     let object4 = new objectProgrammig("nofel","ebiyev","aspaz","700");
//     let object5 = new objectProgrammig("emin","ebiyeb","aspaz","600");
//     console.log(object1.lastName)
//     console.log(object2)
//     console.log(object3)
//     console.log(object4)
//     console.log(object5)

    /**..................... */
    

    // class deneme{

    //    constructor(ad,soyad,yas){
    //     this.name=ad;
    //     this.surname=soyad;
    //     this.age=yas
    //    }
       
       
       
    //     topla(a,b){console.log(a+b)}

    //     cixma(a,b){console.log(a-b)}

    //     static vurma(a,b){console.log(a*b)}

    //     bolme(a,b){console.log(a/b)}

    // }

    // let math1= new deneme("elmar","Mustafayev",deneme.topla(25,35));
    // console.log(math1)
  
  
    class deneme {
        constructor(ad, soyad, yas) {
          this.name = ad;
          this.surname = soyad;
          this.age = yas;
        }
      
        topla(a, b) {
          this.age = a + b;
          console.log(this.age);/** burada yas toplama funksiyadan aldim */
        }
      
        cixma(a, b) {
          console.log(a - b);
        }
      
        static vurma(a, b) {
          console.log(a * b);
        }
      
        bolme(a, b) {
          console.log(a / b);
        }
      }
      
      let math1 = new deneme("elmar", "Mustafayev", );
      math1.topla(25, 35); // Toplama işlemi, yas değeri güncellenir
      math1.cixma(50, 20); // Çıkarma işlemi
      deneme.vurma(5, 10); // Statik vurma işlemi
      math1.bolme(30, 3); // Bölme işlemi
      
      console.log(math1);
      