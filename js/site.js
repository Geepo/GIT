
var ar;
console.log(ar);
ar=['h','o','l','a'];
console.log(ar);
console.warn("longitud de ar:",ar.length,ar);
console.log("longitud de ar:"+ar.length+ar);
 
/*
hola
este
es 
un 
comentario
*/

debugger;
var minombre= "Ginnette Andrea Portela";
var palabra = "";
for(var i=0; i<minombre.length;i++){
   if(i%2 == 0){
       palabra = palabra + minombre[i].toUpperCase();
   } 
   else{
        palabra =palabra + minombre[i].toLowerCase();
   }
   console.log(palabra[palabra.length-1],"=>",i);
}
console.log(palabra);


for(var i=0; i<minombre.length;i++){
    if(this.isPair(i)){
        palabra = palabra + minombre[i].toUpperCase();
    } 
    else{
         palabra =palabra + minombre[i].toLowerCase();
    }
    console.log(palabra[palabra.length-1],"=>",i);
 }
 console.log(palabra);


/*
funciones*/

function isPair(x){
    return x%2 == 0?true:false;
}

function convertChar(c,isUp){
    return isUp? c.toUpperCase():c.toLowerCase();
}

function getLast(t){return t[t,length-1];
}

function mostrarTexto(t){
    var temp="";
    for(var i=0; i<t.length;i++){
        temp=temp+converchart(t[i]); isPair(i);
        console.log(getLast (temp),"=>",i);
    }
console.log(temp);
}

var ar=[1,2,"3",4,"5"]
ar=ar.map(item => item+1);
console.log(ar);
