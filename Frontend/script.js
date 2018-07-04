

const menu = document.querySelector(".lista");
const botao = document.querySelector("#hamburguer");


function acao(){
    if(menu.classList.contains("esconder")){
        menu.classList.remove("esconder");
    }else{
        menu.classList.add("esconder");
    }
}

botao.onclick = acao;