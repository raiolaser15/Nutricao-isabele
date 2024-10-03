var titulo = document.querySelector(".titulo");
titulo.textContent = "Lucas Nutrição";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < 5; i++) {
  console.log(pacientes[i]);
  
  var tdPeso = pacientes[i].querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = pacientes[i].querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = pacientes[i].querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 0 || peso > 600) {
  tdPeso.textContent = "Peso inválido!";
  pesoEhValido = false;
  pacientes[i].classList.add("dados-invalidos");
}

if (altura < 0 || altura > 2.80) {
  tdAltura.textContent = "Altura inválida!";
  alturaEhValida = false;
  pacientes[i].classList.add("dados-invalidos");
}

if (pesoEhValido && alturaEhValida) {
  var imc = peso / (altura * altura);
  tdImc.textContent = imc.toFixed(2);
}
}

var paciente = document.querySelector("#primeiro-paciente");
