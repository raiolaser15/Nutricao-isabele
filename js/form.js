var paciente = document.querySelector("#primeiro-paciente");

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

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

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
});
  
  //extraindo os dados digitados no formulario
var paciente = obtemPacienteDoFormulario(form);
  
  //criando a linha e as celulas da tabela do novo paciete
  var pacienteTr = montaTr(paciente);
  
  var erros = validaPaciente(paciente);
  
  if(erros.length > 0) {
    exibeErros(erros);
    return;
  }

  //aqui add a linha com todos os seus dados na tabela do html
  var tabela = document.querySelector('#tabela-pacientes');
  
  tabela.appendChild(pacienteTr);
  form.reset();
});

function exibeErros(erros){
  var ul = document.querySelector("#mensagens-erro");
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

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
function montaTr(paciente){
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente");
  console.log(pacienteTr);

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  
  return td;
}

function validaPaciente(paciente){
  var erros = [];
  
  if (!validaPeso(paciente.peso)){
    erros.push("Peso inválido!")
  }
  return erros;
 }
