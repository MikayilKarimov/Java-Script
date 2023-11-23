// let arr = [1,2,3,4,5];
// let [a,b]=arr;
// console.log(a);
// console.log(b); 

/** */
// let arr2 = ()=>{
//     return [10,20,30,40]
// }
// let [c,d] = arr2();
// console.log(c)
// console.log(d)

/** */

// let obj = {
//     a:30,
//     b:40,
//     c:50,
//     d:60}
//     let {a,b}=obj;
//     console.log(a);
//     console.log(b)

// let içİçəArray =[1,2,[46,55]];
// let [a,b,[c,d]]=içİçəArray;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let arr = [10, 20, 30, 40, 50];
// let index = arr.indexOf(30); // Aradığınız değer: 30
// console.log(index); // Çıktı: 2 (30, dizinin 2. indeksinde bulunuyor)




/**Məsələn dizidə almağ istədiyim veri 152ci sıradadı.Onu alıb işdədmək üçün belə yazırığ */
/**1ci hansı indeksdə olduğunu tapağ */
// let arr = [/................/]
// let indexinTap = arr.indexOf(20) //məsələn tapdımki 151ci indeksdədi
// let [newArr]=arr[151] //burdada destructionla goturub isdedirem



let nnn = ["elmar","vahid","oguz"];
console.log(nnn)
let [a,b] = nnn;
console.log(a);
console.log(b);

let nnn2 = [...nnn,"mikayil"]
console.log(nnn2       /**spread isdeddim */)