function somatorio(conjunto){
    let soma_conjunto = 0;
    
    for(i = 0; i < conjunto.length; i ++){
      soma_conjunto = parseInt(conjunto[i]) + soma_conjunto;
    
    }
    return soma_conjunto;
    }
    module.exports = somatorio;