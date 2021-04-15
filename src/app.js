function esPrimo(numero) {
    if (numero == 0 || numero == 1 || numero == 4)
        return false;
    for (var x = 2; x < numero / 2; x++) {
        if (numero % x == 0)
            return false;
    }
    return true;
}
var numero = 7;
console.log(esPrimo(numero));
