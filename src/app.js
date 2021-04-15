var vec = [];
var cadena = "abca";
var cadenas = "xyzbac";
var cont = 0;
for (var index = 0; index < cadenas.length; index++)
    vec[index] = cadenas.charAt(index);
for (var index = 0; index < cadenas.length; index++)
    for (var j = 0; j < vec.length; j++)
        if (cadena.charAt(index) == vec[j] && vec[j] != '') {
            cont++;
            vec[j] = "";
            j = vec.length - 1;
        }
console.log(cont);
