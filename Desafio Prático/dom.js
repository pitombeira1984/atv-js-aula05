console.log("Qual o melhor Sistema Operacional para uso em servidores?");
console.log("1 - Windows Server");
console.log("2 - Unix");
console.log("3 - Linux");
console.log("4 - Netware");
console.log("5 - Mac OS");
console.log("6 - Outros");



let res = [];
let ws = [];
let unix = [];
let linux = [];
let netware = [];
let mac = [];
let outros = [];

for(i = 0; i < 100; i++){

    let p = Number(prompt("Qual o melhor Sistema Operacional para uso em servidores?"));

    if(p === 0){

        console.log("Encerramos a Pesquisa!");
        break;

    }

    res.push(p);

    if(p === 1){

        ws.push(p);

    }else if(p === 2){
 
        unix.push(p);

    }else if(p === 3){

        linux.push(p);

    }else if(p === 4){

        netware.push(p);

    }else if(p === 5){

        mac.push(p);

    }
    else if(p === 6){

        outros.push(p);

    }else{

        console.log("Opção Incorreta");

    }        
}

let pws = (ws.length/res.length)*100;
let punix = (unix.length/res.length)*100;
let plinux = (linux.length/res.length)*100;
let pnetware = (netware.length/res.length)*100;
let pmac = (mac.length/res.length)*100;
let poutros = (outros.length/res.length)*100;



console.log("Resultado", res);
console.log("Resultado Window Server", ws);
console.log(`O Window Server tem um percentula de ${pws}% aprovação`);
console.log("Resultado Unix", unix);
console.log(`O Window Server tem um percentula de ${punix}% aprovação`);
console.log("Resultado Linux", linux);
console.log(`O Window Server tem um percentula de ${plinux}% aprovação`);
console.log("Resultado NetWare", netware);
console.log(`O Window Server tem um percentula de ${pnetware}% aprovação`);
console.log("Resultado Mac Os", mac);
console.log(`O Window Server tem um percentula de ${pmac}% aprovação`);
console.log("Resultado Outros", outros);
console.log(`O Window Server tem um percentula de ${poutros}% aprovação`);


    
