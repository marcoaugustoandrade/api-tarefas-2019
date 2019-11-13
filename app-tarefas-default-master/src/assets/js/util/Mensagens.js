class Mensagem{

  constructor(){
    
    this._mensagem = ''
  }
  
  static mostrar(msg, classe){
    
    this._mensagem = document.querySelector("#mensagem")
    this._mensagem.innerHTML = msg
    this._mensagem.className = ''
    this._mensagem.classList.add('m-3', 'alert', classe)
    
    setTimeout(() => {
      this._mensagem.innerHTML = ''
      this._mensagem.className = ''
      this._mensagem.classList.add('d-none')
    }, 3000)
  }
}
