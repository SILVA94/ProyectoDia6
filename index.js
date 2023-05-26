let notas = [9,4,10,7,8]

function calificaciones(){
    let elementoListaNotas = document.getElementById("listaNotas")
    
    
    for (let qualy of notas){
        
    let itemLista = document.createElement("li")
        elementoListaNotas.appendChild(itemLista)
    let mostrandoCalificaciones = qualy
    itemLista.innerText = mostrandoCalificaciones
        console.log(qualy)
     }
}

function promedio(){
    let nota = 0
    //let promedios = document.getElementById("Promedio").value
   //document.getElementById("Promedio").value = promedioRicardo
    
    for (i = 0; i < notas.length; i++){
        
        nota = notas[i] + nota 
        //console.log(nota + "nota vale")
        //console.log(i + "i vale ")
        promedioRicardo = nota / 5
    }
    document.getElementById("Promedio").value =  promedioRicardo
    
    console.log(promedioRicardo)
}



function notaMasAlta(){
    let notaAlta = 0;
    let i = 0;

    while (i < 5){
        if (notas[i] > notaAlta){
            notaAlta = notas[i]
        }
       i++
        
    }

    console.log(notaAlta)
    document.getElementById("notaAlta").value = notaAlta
}

function reprobaste(){
    let materiaReprobada = "no";
    let i = 0

    do{
        if(notas[i] < 6){
            materiaReprobada = "si"
            console.log(i)
            break
        }i++
        
    }while(i < 5) 
    
    console.log("Reprobaste la materia con" + materiaReprobada)
}
