class Categoria {
    
    constructor(descricao, cor){
        this._descricao = descricao
        this._cor = cor
      }
    
      toJSON() {
        return {
          descricao: this._descricao,
          cor: this._cor
        };
    }
}
