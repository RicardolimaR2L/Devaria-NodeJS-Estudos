try {
  const listaDeProdutosDisponiveis = [
    'Pao',
    'Leite',
    'Cafe',
    'Laranja',
    'Macarrao',
    'Sabonte',
    'Detergente'
  ]

  const listaDeArgumentos = process.argv.slice(2)

  const listaDeProdutosSolicitadosDisponiveis =
    listaDeProdutosDisponiveis.filter(produto => {
      return listaDeArgumentos.find(argumento => argumento === produto)
    })

  listaDeProdutosSolicitadosDisponiveis.forEach(produto =>
    console.log(`Este produto nos temos: ${produto} `)
  )

  const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(
    argumento => {
      return !listaDeProdutosDisponiveis.find(produto => produto === argumento)
    }
  )

  listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento =>
    console.log(`este produto nos nao temos: ${argumento}`)
  )

  listaDeProdutosDisponiveis.sort()
  listaDeProdutosDisponiveis.forEach(produto =>
    console.log(`estes produtos nos temos: ${produto}`)
  )
} catch (error) {
  console.log('nao foi possivel efetuar seu pedido de compra ')
}
