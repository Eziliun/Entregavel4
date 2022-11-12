function calcularMDC(n1, n2) {
    while (n2 !== 0) {
            let resto = n1 % n2;
            n1 = n2;
            n2 = resto;
        }
        return n1;
    }

function MDCDeLista(numeros) {
    let mdcAtual = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        mdcAtual = calcularMDC(mdcAtual, numeros[i]);
    }
    return mdcAtual;
}


module.exports = MDCDeLista