let notas = [10,8,9,7,7]

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

