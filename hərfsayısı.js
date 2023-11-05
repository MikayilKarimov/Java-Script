let wordCount =  alert("Lutfen bir harf aratiniz");

let search = prompt("istediyinix harfi aratiniz");

let dondurulmusDeyer = harfArama(search);

alert("Aradiginiz harf sayisi" + dondurulmusDeyer);

function harfArama (harArama){

    let harfSirasi=0;

    for(i=0;i<wordCount.length;i++){
if(wordCount.charAt(i)===search){harfSirasi+=1;}

    }

return harfSirasi;
}