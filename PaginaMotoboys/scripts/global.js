const $menu = qs('.menu-lateral')
const $btnMenu = qs('.cabecalho__menu')

/**document.querySelector() */
function qs(selector, parent = document) {
  return parent.querySelector(selector)
}

/**document.querySelectorAll() */
function qsa(selector, parent = document) {
  return [...parent.querySelectorAll(selector)]
}

/**document.createElement() */
function ce(selector, parent = document) {
  return parent.createElement(selector)
}


$btnMenu.onclick = () => {
  $menu.classList.toggle('menu-lateral--ativo')
}
