const $infoLista = qs("#info-lista")

const $modal = qs("#myModal");
const $span = qs(".close__modal");
const $tituloModal = qs(".modal-header h2");
const $modalBody = qs("#modal-body")


$infoLista.onclick = () => {
  $modal.style.display = "block";

  $tituloModal.innerHTML = 'MP Boy';
  $modalBody.innerHTML = `
    <ul class="modal__ul">
      <li>Aqui, você terá acesso a todas as informações relacionadas aos motoboys registrados em seu sistema.</li>
      <li>Você também poderá cadastrar novos motoboys, remover motoboys e alterar os dados deles.</li>
    </ul>
  `
}


const infoMotoboy = (obj) => {
  $modal.style.display = "block";
  
  $tituloModal.innerHTML = 'Informações do Motoboy';
  $modalBody.innerHTML = `
    <div class="modal__div">
      <div class="modal__div__img">
        <img src="${obj.url}" alt="Foto Motoboy" />
      </div>
      <div class="modal__container__input">
        <div class="modal__div__input">
          <label class="modal__label__input" for="nome">Nome:</label>
          <input class="modal__input" type="text" id="nome" disabled name="nome" value="${obj.nome}">
        </div>
        <div class="modal__div__input">
          <label class="modal__label__input" for="placa">Placa:</label>
          <input class="modal__input" type="text" id="placa" disabled name="placa" value="${obj.placa}">
        </div>
        <div class="modal__div__input">
          <label class="modal__label__input" for="telefone">Telefone:</label>
          <input class="modal__input" type="text" id="telefone" disabled name="telefone" value="${obj.telefone}">
        </div>
        <div class="modal__div__input">
          <label class="modal__label__input" for="email">Email:</label>
          <input class="modal__input" type="text" id="email" disabled name="email" value="${obj.email}">
        </div>
      </div>
    </ul>
  `
}


$span.onclick = () => {
  $modal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == $modal) {
    $modal.style.display = "none";
  }
}

