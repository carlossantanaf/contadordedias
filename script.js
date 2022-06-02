import contagemRegressiva from './contagemr.js';

const dia = document.getElementById('dia')
const mes = document.getElementById('mes')
const ano = document.getElementById('ano')
const saber = document.getElementById('saber')
const form = document.querySelector('form');
const date = new Date()
const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const resposta = document.querySelector('.resposta')

function mudanca(event) {
  if(dia.value > 31 || dia.value < date.getDate() + 1) {
    dia.value = date.getDate() + 1
  } else if(mes.value > 12 || mes.value < date.getMonth() + 1) {
    mes.value = date.getMonth() + 1
  } else if (+ano.value < date.getFullYear()) {
    ano.value = date.getFullYear()
  }
  const tempoParaAlgo = new contagemRegressiva(`${+dia.value} ${meses[+mes.value - 1]} ${+ano.value} 23:59:59`);
  console.log(tempoParaAlgo.total)

  return tempoParaAlgo.total
}
function saberTempo(event) {
  event.preventDefault()
  console.log(mudanca().dias)
  resposta.innerHTML = `Faltam ${mudanca().dias} dias, ${mudanca().horas} horas, ${mudanca().minutos} minutos e ${mudanca().segundos} segundos`
}
saber.addEventListener('click', saberTempo)



form.addEventListener('change', mudanca)

