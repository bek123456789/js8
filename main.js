// let str = 'Bekzod'

// for(let i = 0; i < str.length; ++i){
//     console.log(i);
// }


// let num = 100

// for (let i = 0; i <= num; ++i) {
    
//     if (i % 2 == 0) {
//          console.log(i +'Juft');
//     }
//     if (i % 2 == 0) {
//          console.log(i +'Toq');
//     }
// }

// var str = 'ABBACC';
// var input = 'B';
// var count = 0;

// for (var i = 0; i < str.length; i++) {
//     if (str[i] === input) {
//         count++;
//     }
// }


let ketma = "[1][2 [4 [3][5]]1]";


let juftSonlar = [];



for (let i = 0; i < ketma.length; i++) {
    var raqam = parseInt(ketma[i]);

    if (raqam % 2 === 0) {
        
        juftSonlar.push(raqam);
    } 
}

console.log(`Boshlanishdagi sonlar:`, ketma);
console.log( "Juft sonlar:", juftSonlar);



