const funcPromisse = (valor, lista) => {
  return new Promise((resolve, reject) => {
    for (let item of lista) {
      if (Object.values(item).includes(valor)) {
        return resolve(item)
      }
    }
    reject(new Error("Nenhum usuário foi encontrado."))
  })
}

const listaUsuarios = [
  {"nome": "João", "idade": 20, "email": "joao@email.com"},
  {"nome": "Maria", "idade": 30, "email": "maria@email.com"},
  {"nome": "Jose", "idade": 40, "email": "jose@email.com"}
]

const valorPesquisado = 2

funcPromisse(valorPesquisado, listaUsuarios)
  .then(res => console.log(res))
  .catch(err => console.error(err.message))