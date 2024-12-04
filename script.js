let btn = document.querySelector(".cadastrar");
let btnEditar;
let btnExcluir;
let tabela = document.querySelector(".tabela");
let id=0;
let array = [];

btn.addEventListener("click", () => pegarDados());

function pegarDados() {
  let evento = document.querySelector("#evento").value;
  let preco = document.querySelector("#preco").value;
  let data = document.querySelector("#data").value;
  cadastrar(evento, preco, data);
}

function cadastrar(evento, preco) {
  let tabela = document.querySelector(".tabela");
  let tabelaCriada = criarDado(evento, preco, data);

  tabela.appendChild(tabelaCriada);

}

function criarDado(evento, preco, data) {
  let tr = document.createElement("tr");
  let tdId = document.createElement("td");
  let tdEvento = document.createElement("td");
  let tdPreco = document.createElement("td");
  let tdData = document.createElement("td");
  let tdAcao = document.createElement("td");

  tr.id = id;
  tdAcao.innerHTML = `<button id="${id}" class="editar" onclick="editarDados(${id})">Editar</button><button class="excluir" onclick="excluirDados(${id})">Excluir</button>`;
  tdId.innerText = id;
  id++;
  tdEvento.innerText = evento;
  tdPreco.innerText = preco;
  tdData.innerText = data;
  array.push({'id': id, 'envento':evento, 'preco':preco});
  tr.append(tdId, tdEvento, tdPreco, tdData, tdAcao);
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