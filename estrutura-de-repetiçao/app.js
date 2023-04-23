const listaArgumentos = process.argv.slice(2)
//Process.agrv : captura o que foi digitado na linha de comando, os valores da lista estão sendo passados na linha de comando.

console.log('----------------Executando um FOR----------------')

for (
  let controladorFor = 0;
  controladorFor < listaArgumentos.length;
  controladorFor++
) {
  console.log(
    `posiçao ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`
  )
}

console.log('(---------------- Executando um WHILE ----------------)')
let controladorWhile = 0
while (controladorWhile < listaArgumentos.length) {
  console.log(
    `posiçao ${controladorWhile} valor lido ${listaArgumentos[controladorWhile]}`
  )
  controladorWhile++
}

console.log('(---------------- Executando um DO WHILE ----------------)')
let controladorDoWhile = 0
do {
  console.log(
    `Posiçao ${controladorDoWhile} valor lido ${listaArgumentos[controladorDoWhile]}`
  )
  controladorDoWhile++
} while (controladorDoWhile < listaArgumentos.length)

console.log('(---------------- Executando FOR OF ----------------)')
let controladorForOf = 0
for (const argumento of listaArgumentos) {
  console.log(`Posiçao ${controladorForOf}valor lido ${argumento}`)
  controladorForOf++
}
//a cada execução do loop For Of ele atribui os valores da lista a variavel Argumento e depois exibi isso com o console.log
