function num_primo(Num){

    let ePrimo = true
    for (let i = 2; i < Num; i++) {
      if (Num % i == 0) {
          ePrimo = false;
          break;
      }
     
    }
    return ePrimo;
    }
    module.exports = num_primo;