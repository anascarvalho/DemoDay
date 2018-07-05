

const menu = document.querySelector(".lista");
const botao = document.querySelector("#hamburguer");
const nav = document.querySelector("nav");


 

function acaobotao(){
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        nav.classList.remove("active");
    }
    else{
        menu.classList.add("active");
        nav.classList.add("active");
    }
    
}

botao.onclick = acaobotao;