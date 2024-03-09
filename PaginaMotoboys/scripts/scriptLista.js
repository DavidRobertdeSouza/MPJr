const $bodyTable = qs('#bodyTable')
const $botaoSalvar = qs('#salvarAlteracoes')
const $thNome = qs('#thNome')
const $thStatus = qs('#thStatus')
const $thQtdEntregas = qs('#thQtdEntregas')

let listaAtual = [
  {"codigo": 1, "url":"https://i.ibb.co/r33SJWJ/motoboy1.jpg","nome":"João Correia","status":"Trabalhando","telefone":"(35) 7870-9364","qtdEntregas":321,"email":"joao.correia@me.com", "placa": "MIR-3250"},
  {"codigo": 2, "url":"https://i.ibb.co/pPwJvmm/motoboy2.jpg","nome":"Igor Antunes","status":"Folga","telefone":"(84) 2750-7290","qtdEntregas":112,"email":"igor.antunes@me.com", "placa": "MLN-6387"},
  {"codigo": 3, "url":"https://i.ibb.co/xCBMjmM/motoboy6.jpg","nome":"Arthur Costa","status":"Folga","telefone":"(51) 8052-8467","qtdEntregas":185,"email":"arthur.costa@me.com", "placa": "MHW-1542"},
  {"codigo": 4, "url":"https://i.ibb.co/GQv2tgD/motoboy4.jpg","nome":"Ryan Ribeiro","status":"Trabalhando","telefone":"(44) 9805-2806","qtdEntregas":173,"email":"ryan.ribeiro@me.com", "placa": "MFE-0113"},
  {"codigo": 5, "url":"https://i.ibb.co/whtWp5n/motoboy5.jpg","nome":"Caio Martins","status":"Trabalhando","telefone":"(55) 7975-7190","qtdEntregas":221,"email":"caio.martins@me.com", "placa": "LYY-9443"}
]

const adicionarTabela = (valores) => {
  $bodyTable.innerHTML = ''
  for(let linha of valores){
    let novaLinha = ce('tr')

    let cell1 = ce('td')
    let img = ce('img')
    let divFirstCell = ce('div')
    divFirstCell.classList.add('itensTable', 'itensTable-div')
    img.src = linha.url
    img.classList.add('imgTable')
    let span = ce('span')
    span.innerHTML = linha.nome
    span.classList.add('itensTable__span')
    divFirstCell.appendChild(img)
    divFirstCell.appendChild(span)
    cell1.appendChild(divFirstCell)

    let cell2 = ce('td')
    let divStatus = ce('div')
    divStatus.innerHTML = linha.status
    divStatus.classList.add('divStatus')
    cell2.appendChild(divStatus)
    cell2.classList.add('itensTable')
    if(linha.status == 'Folga'){
      divStatus.classList.add('statusYellow')   
    }else if(linha.status == 'Trabalhando'){
      divStatus.classList.add('statusGreen')
    }

    let cell3 = ce('td')
    cell3.innerHTML = linha.telefone
    cell3.classList.add('itensTable')

    let cell4 = ce('td')
    cell4.innerHTML = linha.qtdEntregas
    cell4.classList.add('itensTable')
  
    novaLinha.appendChild(cell1)
    novaLinha.appendChild(cell2)
    novaLinha.appendChild(cell3)
    novaLinha.appendChild(cell4)

    // ADICIONANDO VIEW
    let itemView = ce('td')
    itemView.classList.add('itensTable', 'itensTable-icons')
    let view = ce('a')
    view.onclick = () => {
      infoMotoboy(linha)
    }
    view.classList.add('fa-solid', 'fa-eye', 'lista-button')
    view.dataset.codigo = linha.codigo
    itemView.appendChild(view)
    novaLinha.appendChild(itemView)

    // ADICIONANDO EDIT
    let itemEdit = ce('td')
    itemEdit.classList.add('itensTable', 'itensTable-icons')
    let edit = ce('a')
    edit.classList.add('fa-solid', 'fa-pen-to-square', 'lista-button')
    edit.dataset.codigo = linha.codigo
    
    itemEdit.appendChild(edit)
    novaLinha.appendChild(itemEdit)

    // ADICIONANDO LIXEIRA
    let itemLixeira = ce('td')
    itemLixeira.classList.add('itensTable', 'itensTable-icons')
    let lixeira = ce('a')
    lixeira.classList.add('fa-solid', 'fa-trash-can', 'lista-button')
    lixeira.dataset.codigo = linha.codigo
    lixeira.onclick = () => {
      removerItem(linha.codigo)
    }
    itemLixeira.appendChild(lixeira)
    novaLinha.appendChild(itemLixeira)

    $bodyTable.appendChild(novaLinha)
  }
}

const ordenarLista = (id='thNome', campo='nome', tipo = 'text') => {
  alterarTituloColuna(id)
  if(tipo==='num'){
    const ordenarPorQtdEntregas = lista => lista.sort((a, b) => a.qtdEntregas - b.qtdEntregas);
    listaAtual = ordenarPorQtdEntregas(listaAtual);
  }
  else{
    listaAtual = listaAtual.sort((a, b) => {
        const itemA = a[campo].toUpperCase();
        const itemB = b[campo].toUpperCase();
  
        if (itemA < itemB) return -1 
        if (itemA > itemB) return 1
  
        return 0;
    });
  }
  adicionarTabela(listaAtual)
}

const alterarTituloColuna = (id) => {
  $thNome.innerHTML = "Nome"
  $thStatus.innerHTML = "Status"
  $thQtdEntregas.innerHTML = "Qtd Entregas"

  document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + "<i class='fa-solid fa-arrow-down margin-left-5'></i>"
}

const removerItem = (codigo) => {
  let index = 0
  for (let item of listaAtual) {
    if (item.codigo == codigo) {
      listaAtual.splice(index, 1)
    }
    index++
  }
  adicionarTabela(listaAtual)
}

ordenarLista()

