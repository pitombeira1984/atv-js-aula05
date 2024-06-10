let numreal = [];
let inverso = [];

for(i = 0;i < 10;i++){

    let num = Number(prompt("Digite um numero Real:"));

    numreal.push(num);
    inverso.unshift(num);

}
console.log("Números Reais:", numreal);
console.log("Inverson", inverso);
    
