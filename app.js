var santa = {
    nome: 'Santa-Cruz',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
    saldo:0
  }
  
  var sport = {
    nome: 'Sport',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
    saldo:0
  }
  
  var nautico = {
    nome: 'Nautico',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
    saldo:0
  }
  
  
  
  var elementoTabela = document.getElementById('tabelaJogadores')
  
  exibirNatela()
  
  function exibirNatela() {
    elementoTabela.innerHTML = `
      <tr>
            <td>${santa.nome}</td>
            <td>${santa.vitoria}</td>
            <td>${santa.empate}</td>
            <td>${santa.derrota}</td>
            <td>${santa.pontos}</td>
            <td>${santa.saldo}</td>
            <td><button onClick="adicionarVitoria(santa)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(santa)">Empate</button></td>
            <td><button onClick="adicionarDerrota(santa)">Derrota</button></td>
            <td><button onClick="adicionarSaldo(santa)">Saldo</button></td>
            
          </tr>
          
    <tr>
            <td>${sport.nome}</td>
            <td>${sport.vitoria}</td>
            <td>${sport.empate}</td>
            <td>${sport.derrota}</td>
            <td>${sport.pontos}</td>
            <td>${sport.saldo}</td>
            <td><button onClick="adicionarVitoria(sport)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(sport)">Empate</button></td>
            <td><button onClick="adicionarDerrota(sport)">Derrota</button></td>
            <td><button onClick="adicionarSaldo(sport)">Saldo</button></td>
          </tr>      
          
     <tr>
            <td>${nautico.nome}</td>
            <td>${nautico.vitoria}</td>
            <td>${nautico.empate}</td>
            <td>${nautico.derrota}</td>
            <td>${nautico.pontos}</td>
            <td>${nautico.saldo}</td>
            <td><button onClick="adicionarVitoria(nautico)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(nautico)">Empate</button></td>
            <td><button onClick="adicionarDerrota(nautico)">Derrota</button></td>
            <td><button onClick="adicionarSaldo(nautico)">Saldo</button></td>
          </tr>     
  
    `
  }
  
  
  function adicionarVitoria(jogador) {
    jogador.vitoria++
    jogador.pontos = jogador.pontos + 3
    exibirNatela()
  }
  
  
  function adicionarEmpate(jogador) {
    jogador.empate++
    jogador.pontos++
    exibirNatela()
  }
  function adicionarDerrota(jogador) {
    jogador.derrota++
    exibirNatela()
  }
  
  function adicionarSaldo(jogador) {
    jogador.saldo++
    
    exibirNatela()
  }
  
  