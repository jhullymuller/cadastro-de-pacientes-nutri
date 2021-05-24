console.log("fui carregado do arquivo externo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
/**
 * querySelectorAll  ele traz a lista de array de pacientes*/
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    
    if(!pesoValido){
        console.log("peso invalido!");
        pesoValido = false;
        tdImc.textContent = "Peso invalido";
        paciente.classList.add("paciente-invalido");
    }

    if(!validaAltura){
        console.log("Altura invalida!");
        alturaValida = false;
        tdImc.textContent = "Altura invalida";
        /**
         * alterando cor da linha atraves de uma classe no css usando 
         * classList.add pra usar a cor de uma classe
         */
        paciente.classList.add("paciente-invalido");

    }

    if(pesoValido && alturaValida){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc; 
    }
}
function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
    }
    else {
        return false;
    }
}
function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    }
    else{
        return false;
    }
}