const readeline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const MinhaPrimeiraConstanteString = 'Minha primeira constante'
console.log(MinhaPrimeiraConstanteString)

let leituraDeCampo
readeline.question('informe sua idade:', input => {
  leituraDeCampo = input
  console.log(`O usuário digitou ${leituraDeCampo}`)
})
