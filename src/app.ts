let array:number[]=[1,0,1,0,1000]; ////[-1,-2]  ///[3,6,-2,-5,7,3];
let n:number;
let aux:number=0;
for(n=0;n<array.length;n++){
 if (array[n]*array[n+1]>aux)
        aux=array[n]*array[n+1];
}
console.log(aux);