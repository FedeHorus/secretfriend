// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let valoramigo = document.getElementById("amigo").value;

    if(valoramigo===""){
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(valoramigo);
    }
    document.getElementById("amigo").value = "";
    
    listaAmigos();
}

function listaAmigos(){
    for (let i = 0; i<amigos.length; i++){
        let amigo = amigos[i];
        
        /*document.getElementById("listaAmigos").innerHTML += `<li>${amigo}</li>`*/
        document.getElementById("listaAmigos").innerHTML = "";
    }
    muestraLista();
    
}

function muestraLista(){
    for (let i in amigos){

        document.getElementById("listaAmigos").innerHTML += `<li>${amigos[i]}</li>`
    }
}

function sortearAmigo(){
    if (amigos.length ==0 ){
        alert("Por favor, inserte un amigo");
    }else{
        let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById("resultado").innerHTML = `<li>${amigoSecreto}</li>`
    }
}