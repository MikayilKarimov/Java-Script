// // /**array kimidi
// //  * ferqi burda key value olmasidi.Local storage kimi
// //  *
// //  */

// // let maps = new Map();
// // console.log(maps);

// // maps.set("1", "elmar");
// // maps.set("2", "raul");
// // maps.set("3", "vahid");

// // // console.log(maps);


// // console.log(maps.has("2"))

// // console.log(maps.values())

// // console.log(maps.get("3"))

// /**Boyuk verilerde isdedmek  */
// // Büyük miktarda veri içeren bir dizi oluşturalım


// const largeArray = [];
// for (let i = 0; i < 1000000; i++) {
//   largeArray.push([i, `Value_${i}`]);
// }

// // Diziyi Map'e dönüştürelim
// const largeMap = new Map(largeArray);

// // Süre ölçümü için başlangıç zamanı
// console.time("ArraySearch");

// // Dizi içinde bir değeri arayalım
// const arrayIndex = largeArray.findIndex(item => item[0] === 500000);

// // Süre ölçümü için bitiş zamanı
// console.timeEnd("ArraySearch");

// console.log("Dizi içinde arama sonucu:", arrayIndex);

// // Süre ölçümü için başlangıç zamanı
// console.time("MapSearch");

// // Map içinde bir değeri arayalım
// const mapResult = largeMap.get(500000);

// // Süre ölçümü için bitiş zamanı
// console.timeEnd("MapSearch");

// console.log("Map içinde arama sonucu:", mapResult);


let arr = [];

for(let i=0 ; i<200;i++){
    arr.push([i,`Veri_${i}`])
}
console.log(arr)

let newMap = new Map(arr)
console.log(newMap)

newMap.forEach(function(value, key) {
    if(value === "Veri_152") {
        console.log(key);
    }
});

let verilerim = newMap.get(152)
console.log(`Maps icindeki verim : |${verilerim}|`)