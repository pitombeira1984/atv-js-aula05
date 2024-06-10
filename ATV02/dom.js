// let vetor = [];
// let int = [];
// let flot = [];
// console.log("Digite 5 numeros inteiros:");
// for(i = 0;i < 5;i++){

//     let num = Number(prompt("Digite um numero:"));

//     vetor.push(num);

//     if((num % 1)===0){

//         int.push(num);

//     }else{

//         flot.push(num);

//     }
// }
// console.log("Vetor:", vetor );
// console.log("Inteiro:", int);
// console.log("Flot:", flot);
//--------------------------------------------//
//---Utilizando .isInteger---//
let vetor = [];
let int = [];
let flot = [];
console.log("Digite 5 numeros inteiros:");
for(i = 0;i < 5;i++){

    let num = Number(prompt("Digite um numero:"));

    vetor.push(num);

    if(Number.isInteger(num)){

        int.push(num);

    }else{

        flot.push(num);

    }
}
console.log("Vetor:", vetor );
console.log("Inteiro:", int);
console.log("Flot:", flot);


