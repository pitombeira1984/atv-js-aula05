let vetor = [];
let par = [];
let impar = [];
let val = Number(prompt("Quantos numeros serão digitados?"));
for(i = 0; i < val; i++){

    let num = Number(prompt("Digite um numero inteiro"));

    vetor.push(num)
    
    if((num % 2)===0){
        par.push(num);
    }
    else{
        impar.push(num);
    }
    
}
console.log("Vetor:", vetor);
console.log("Pares:", par);
console.log("Ímpares:", impar);