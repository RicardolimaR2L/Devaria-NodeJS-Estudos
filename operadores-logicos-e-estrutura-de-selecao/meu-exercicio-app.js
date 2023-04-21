/*
Desafio:

Escrever um programa que recebe o nome e a idade e de acordo com uma lista de convidados validar se a pessoa está na lista e é maior de idade e retornar a mensagem de acordo com as validações feitas.

*/

const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('Lista de presença do kart')
console.log(
  'Esse programa vai checar se voce é maior de 18 anos e tem habilitação para saber se voce pode entrar no kart'
)
console.log(
  'alem dessas verificações, precisamos verificar se voce esta na lista de presença do horario '
)
const maioridade = 18

readLine.question('qual a sua idade ?', idade => {
  if (idade < maioridade) {
    console.log('voce nao tem 18 anos.')
  } else {
    readLine.question('voce tem habilitaçao? (sim/nao)', temHabilitaçao => {
      if (!(temHabilitaçao.toUpperCase() === 'SIM')) {
        console.log('voce nao tem habilitaçao para entrar no kart ')
      } else {
        readLine.question('qual o seu nome ?', nome => {
          switch (nome) {
            case 'douglas':
              console.log(`voce tem ${idade} anos e possui habilitaçao`)
              console.log('bem vindo ao kart Douglas')
              break
            case 'rafael':
              console.log(`voce tem ${idade} anos e possui habilitaçao`)
              console.log('Bem vindo ao kart Rafael')
              break
            default:
              console.log(' Seu nome nao esta na lista de presença')
          }
        })
      }
    })
  }
})
