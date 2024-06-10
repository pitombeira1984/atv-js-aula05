let res = [];
let sim = [];
let nao = [];

for(i = 0; i < 1; i++){

    let p1 = prompt("Telefonou para a Vitima?");

    res.push(p1);

    if(p1 === "sim"){

        sim.push(p1);

    }else{
 
        nao.push(p1);

    }

    let p2 = prompt("Esteve no local do Crime?");

    res.push(p2);

    if(p2 === "sim"){

        sim.push(p2);

    }else{
 
        nao.push(p2);

    }

    let p3 = prompt("Mora Perto da Vítima?");

    res.push(p3);

    if(p3 === "sim"){

        sim.push(p3);

    }else{
 
        nao.push(p3);

    }

    let p4 = prompt("Debia para a Vítima?");

    res.push(p4);

    if(p4 === "sim"){

        sim.push(p4);

    }else{
 
        nao.push(p4);

    }

    let p5 = prompt("Já trabalhou com a Vítima?")

    res.push(p5)

    if(p5 === "sim"){

        sim.push(p5);

    }else{
 
        nao.push(p5);

    }    
}
console.log("Resultado", res);
console.log("Resultado Sim", sim);
console.log("Resultado Não", nao);

if(sim.length===2){
    console.log("Suspeita");
}    
else if(sim.length >2 && sim.length <= 4){
    console.log("Cúplice");
}
else if(sim.length > 4 && sim.length <= 5){
    console.log("Assasino");
}else{
    console.log("Inocente");
} 
    
