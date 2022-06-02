export default class contagemRegressiva {
  constructor(dataFutura) {
    this.dataFutura = dataFutura
  }
  get _dataAtual() {
    return new Date();
  }
  get _dataFutura() {
    return new Date(this.dataFutura);
  }
  get _timeStampDiff() {
    return this._dataFutura.getTime() - this._dataAtual.getTime()
  }
  get dias() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }
  get horas() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }
  get minutos() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }
  get segundos() {
    return Math.floor(this._timeStampDiff / 1000);
  }
  get total() {
    const dias = this.dias;
    const horas = this.horas % 24;
    const minutos = this.minutos % 60;
    const segundos = this.segundos % 60;
    return {
      dias,
      horas,
      minutos,
      segundos
    }
  }
}



