var vec : Array<string> = [];
var cadena= "abca";
var cadenas = "xyzbac";
let cont = 0;
for(let index=0 ; index<cadenas.length ; index++)
    vec[index]=cadenas.charAt(index);    
for(let index=0 ; index<cadenas.length ; index++)
    for(let j=0 ; j<vec.length ; j++)
        if(cadena.charAt(index)==vec[j] && vec[j]!='')
        {
            cont++;
            vec[j]="";
            j=vec.length-1;
        }
console.log(cont);