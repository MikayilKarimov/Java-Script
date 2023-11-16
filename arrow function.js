function salam (){
console.log("salam")

}

salam() /**normalda belə yazardığ funksiyanı */

let sagol = () => {
    console.log("sagol");
};
sagol();
//bu arrow functiondur!!!!

let reqemler = () =>{
    console.log("1,2,3,4,5,6,7,8,9,10")
}

reqemler();
//Suslu parantezsiz yazilir bir setir olanda

let toplama = (a,b)=>{console.log(a+b)}

toplama(5,6);