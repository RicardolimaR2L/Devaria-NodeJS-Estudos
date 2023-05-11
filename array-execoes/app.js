try {
  // Lista de produtos disponíveis
  const listaDeProdutosDisponiveis = [
    'Pao',
    'Leite',
    'Cafe',
    'Laranja',
    'Macarrao',
    'Sabonte',
    'Detergente'
  ];

  // Lista de argumentos passados via linha de comando
  const listaDeArgumentos = process.argv.slice(2);

  // Filtra os produtos disponíveis que foram solicitados
  const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
    return listaDeArgumentos.find(argumento => argumento === produto);
  });

  // Exibe os produtos disponíveis solicitados
  listaDeProdutosSolicitadosDisponiveis.forEach(produto =>
    console.log(`Este produto nós temos: ${produto}`)
  );

  // Filtra os argumentos que não correspondem a produtos disponíveis
  const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
    return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
  });

  // Exibe os produtos solicitados que não estão disponíveis
  listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento =>
    console.log(`Este produto nós não temos: ${argumento}`)
  );

  // Ordena a lista de produtos disponíveis em ordem alfabética
  listaDeProdutosDisponiveis.sort();

  // Exibe a lista de produtos disponíveis ordenada
  listaDeProdutosDisponiveis.forEach(produto =>
    console.log(`Estes produtos nós temos: ${produto}`)
  );
} catch (error) {
  console.log('Não foi possível efetuar seu pedido de compra.');
}
