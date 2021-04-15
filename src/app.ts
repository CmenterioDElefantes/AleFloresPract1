let pieck:number[]=[0,3] ///[5,4,6]        ///[6,2,3,8];
pieck.sort();
let n:number;
let aux:number=0;
for(n=0;n<pieck.length;n++){
 if (pieck[n+1]-pieck[n]>1)
        aux=aux+pieck[n+1]-pieck[n]-1;
}
console.log(aux);