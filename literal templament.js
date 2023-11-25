let keyboard = (a,b)=>{
    console.time("Toplama zamani :")
    toplam=a+b;
    console.timeEnd("Toplama zamani :")
    
    console.time("cikma zamani :")
    cikma = b-a;
    console.timeEnd("cikma zamani :")
    
    console.time("vurma zamani :")
    vurma = a*b;
    console.timeEnd("vurma zamani :")

    console.time("bolme zamani :") 
    bolme = b/a;
    console.timeEnd("bolme zamani :")
}

keyboard(11118975,111265485);
console.log(`
                Arrow function resault : ${toplam}
                Cikma : ${cikma}
                vurma : ${vurma}
                bolme : ${bolme}`)



let isimlerDizi = {
ad :"Mikayil",
soyad :"kerimov",
maas :"2000",
    
}

console.log(`${isimlerDizi.ad} ${isimlerDizi.soyad}       ${isimlerDizi.maas}`);



let dizi = ["raul","elmar","vahid",true,125]
console.log(`${dizi[3]} ${dizi[1]}`)