let notas = [];
let qnotas = Number(prompt("Digite a quantidade de notas:"));
let soma = 0;
for(i = 0;i < qnotas;i++){

    let num = Number(prompt("Digite a Nota:"));

    notas.push(num);

    soma = soma + num; 

}
console.log("Notas:", notas);
console.log(`Média: ${soma/qnotas}`);
    
