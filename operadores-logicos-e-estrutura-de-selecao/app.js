const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('Lista de presença do kart')
console.log(
  'Esse programa vai checar se voce tem é maior de 18 anos e tem habilitação para saber se voce pode entar no kart'
)
console.log(
  'alem dessa verificações, precisamos verificar se voce esta na lista de presença do horario '
)
readLine.question('qual o ano de seu nascimento?', ano => {
  if (ano > 2004) {
    console.log('voce nao tem 18 anos')
  } else {
    readLine.question('voce ten habilitaçao? (sim/nao) ', temHabilitaçao => {
      if (!(temHabilitaçao.toUpperCase() === 'SIM')) {
        console.log('voce nao tem habilitaçao para entrar no kart')
      } else {
        readLine.question('qual o seu nome?', nome => {
          switch (nome) {
            case 'douglas':
              console.log('Bem vindo ao kart Douglas')
              break
            case 'Rafael':
              console.log('Bem vindo ao kart Rafael')
              break
            default:
              console.log('Seu nome nao foi identificado na lista de presença')
          }
        })
      }
    })
  }
})
