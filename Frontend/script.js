const botao = document.querySelector("#hamburguer");



function abrir(){
    if(botao.classList.contains("hamburguer")){
        botao.classList.remove("hamburguer");
    }
    else{
        menu.classList.add("hamburguer");
        botao.classList.add("hamburguer");
    }
    
}

botao.onclick = abrir;