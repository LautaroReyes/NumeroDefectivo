let numero = prompt("Ingrese un numero");

function esDefectivo(numero){
    let resto = 0;
    
    for(let i=0; i<numero; i++){
        if(numero % i == 0){
            resto += i; 
        }
    }

    return resto;
}
if(esDefectivo(numero) < numero){
    document.write(numero + " es un Numero Defectivo")
}else{
    document.write(numero + " no es un Numero defectivo");
}
