class teacher{
    constructor(ad,soyad,maas){
        this.name=ad;
        this.surname=soyad;
        this.salary=maas;
    }

    bosluq(){
        let bosluq="\n"
    }


ekrandaGoster(){
    console.log(this.name +  this.surname + this.salary)
}

}


class english extends teacher{
    constructor(name,surname,salary){
        super(name,surname,salary)
    }
writeScreen(){
    super.ekrandaGoster();
}
}



let teacher1=new teacher("aysel","krm","200");
let english1=new english("xelil","memmedqulu","6000")
english1.writeScreen();
teacher1.ekrandaGoster()
