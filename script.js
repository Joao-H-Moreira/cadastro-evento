let btn = document.querySelector(".cadastrar");
let btnEditar;
let btnExcluir;
let tabela = document.querySelector(".tabela");
let id=0;
let array = [];

btn.addEventListener("click", () => pegarDados());

function pegarDados() {
  let evento = document.querySelector("#evento").value;
  let data = document.querySelector("#data").value;
  let preco = document.querySelector("#preco").value;
  cadastrar(evento, data, preco);
}

function cadastrar(evento, preco, data) {
  let tabela = document.querySelector(".tabela");
  let tabelaCriada = criarDado(evento, data, preco);

  tabela.appendChild(tabelaCriada);

}

function criarDado(evento, data, preco) {
  let tr = document.createElement("tr");
  let tdId = document.createElement("td");
  let tdEvento = document.createElement("td");
  let tdData = document.createElement("td");
  let tdPreco = document.createElement("td");
  let tdAcao = document.createElement("td");

  tr.id = id;
  tdAcao.innerHTML = `<button id="${id}" class="editar" onclick="editarDados(${id})">Editar</button><button class="excluir" onclick="excluirDados(${id})">Excluir</button>`;
  tdId.innerText = id;
  id++;
  tdEvento.innerText = evento;
  tdData.innerText = data;
  tdPreco.innerText = preco;
  array.push({'id': id, 'evento':evento, 'preco':preco,'data': data});
  tr.append(tdId, tdEvento, tdData, tdPreco, tdAcao);
  return tr;
}

function editarDados(id) {
  let idAt = id;
  let btnAtualizar = document.querySelector(".atualizar");
  let campoEditar = document.querySelector("#alterarEventos");
  if(campoEditar.classList == "oculto") campoEditar.classList.replace("oculto", "visivel");

  btnAtualizar.addEventListener("click", () =>{
    novosDados(idAt);
    campoEditar.classList.replace("visivel", "oculto");
  });
  // gerar a tabela inteira ao editar
  // gerar a tabela após adicionar um elemento no array
}

function novosDados(idAt) {
  // for (const ar of array) {
  //   if(ar.id == idAt){
  //     console.log(ar);
  //   }
  // }
  let vetor = [];
  console.log(array);
  let trAtual='';
  trAtual = document.createElement("tr");
  trAtual.id = idAt;
  vetor[0] = document.createElement("td");
  vetor[1] = document.createElement("td");
  vetor[2] = document.createElement("td");
  vetor[3] = document.createElement("td");
  
  vetor[0].innerText = idAt;
  vetor[1].innerText = document.querySelector("#eventoAtualizado").value;
  vetor[2].innerText = document.querySelector("#precoAtualizado").value;
  vetor[3].innerHTML = `<button class="editar" onclick="editarDados(${idAt})">Editar</button><button class="excluir" onclick="excluirDados(${idAt})">Excluir</button>`;

  excluirDados(idAt);
  
  trAtual.append(vetor[0], vetor[1], vetor[2], vetor[3]);
  tabela.appendChild(trAtual);
  console.log(idAt);
}

function excluirDados(id) {
  let elementoExcluir = document.getElementById(id);
  tabela.removeChild(elementoExcluir); 
}