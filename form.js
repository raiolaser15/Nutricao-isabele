var tabela = document.querySelector("#tabela-pacientes");
  
  tabela.appendChild(pacienteTr);
  
  titulo.addEventListener('click', mostrarMensagem);

function mostrarMensagem (){
  /*console.log("O título foi clicado");*/
}

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event) {
  event.preventDefault();
  
  var form = document.querySelector('#form-adiciona');
  
  //extraindo os dados digitados no formulario
var paciente = obtemPacienteDoFormulario(form);
  console.log(paciente);
 /*console.log(form.nome.value);
  console.log(form.peso.value);
  console.log(form.altura.value);
  console.log(form.gordura.value*/
  
  /*criando a linha e as celulas da tabela do novo paciete*/
  
  var pacienteTr = document.createElement('tr');
  /*console.log(pacienteTr);*/
  
  var nomeTd = document.createElement('td');
  var pesoTd = document.createElement('td');
  var alturaTd = document.createElement('td');
  var gorduraTd = document.createElement('td');
  var imcTd = document.createElement('td');
  
  
  nomeTd.textContent = nomeAdicionar;
  pesoTd.textContent = pesoAdicionar;
  alturaTd.textContent = alturaAdicionar;
  gorduraTd.textContent = gorduraAdicionar;
  imcTd.textContent = calculaImc(peso, altura);
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);
  
  /*aq add a linha com todos os seus dados na tabela do html*/
  
  var tabela = document.querySelector('#tabela-pacientes');
  
  tabela.appendChild(pacienteTr);
});

function obtemPacienteDoFormulario(form){
    
   var paciente = {
     nome: form.nome.value, 
     peso: form.peso.value,
     altuta: form.altura.value,
     gordura: form.gordura.value,
     imc: calculaImc(form.peso.value, form.altura.value)
   }
   
   return paciente; 
}

});
