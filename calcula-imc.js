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

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
  console.log("O titulo foi clicado");
}

var botaoAdicionar = document.querySelector("#add-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  
  var form = document.querySelector("#form-add");
  
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;
  
  var pacienteTr = document.createElement("tr");
  
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");
  
  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = imc;
  
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);
  
  var tabela = document.querySelector("#tabela-pacientes");
  
  tabela.appendChild(pacienteTr);
  
  
});
