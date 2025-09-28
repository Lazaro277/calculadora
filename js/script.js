function calcular(tipo, valor) {
  if (tipo === 'acao') {
    if (valor === 'c') {
      //limpar o visor
      document.getElementById('resultado').value = '';
      document.getElementById('resultado2').value = '';
      document.getElementById('previa_resultado').value = '';
      document.getElementById('previa_resultado').classList.remove('d-block');
      document.getElementById('previa_resultado').classList.add('d-none');
    }
    if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
      document.getElementById('resultado').value += valor;
      document.getElementById('resultado2').value += valor;
      document.getElementById('previa_resultado').value += valor;
    }
    if (valor === 'apagar') {
      var valorAtual = document.getElementById('resultado2').value;
      var valorAtual2 = document.getElementById('previa_resultado').value;
      if (valorAtual.length > 0) {
        document.getElementById('resultado2').value = valorAtual.slice(0, -1);
        document.getElementById('previa_resultado').value = valorAtual2.slice(0, -1);
      }
    }
    if (valor === '=') {
      var valor_campo = eval(document.getElementById('resultado').value);
      var valor_campo2 = eval(document.getElementById('resultado2').value);
      document.getElementById('resultado').value = valor_campo;
      document.getElementById('resultado2').classList.add('pt-2');
      document.getElementById('resultado2').value = valor_campo2;
      document.getElementById('previa_resultado').value += '=';
      document.getElementById('previa_resultado').classList.remove('d-none');
      document.getElementById('previa_resultado').classList.add('d-block');
    }
  } else if (tipo === 'valor') {
    document.getElementById('resultado').value += valor;
    document.getElementById('resultado2').value += valor;
    document.getElementById('previa_resultado').value += valor;
  }
}
function trocarEstilo(estilo1, estilo2) {
  document.getElementById(estilo1).classList.remove('d-none');
  document.getElementById(estilo1).classList.add('d-block');
  document.getElementById(estilo2).classList.add('d-none');
  document.getElementById(estilo2).classList.remove('d-block');
}