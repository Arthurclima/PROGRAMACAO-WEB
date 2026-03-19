// trabalhar com eventos

//propriedades
let botao1 = document.getElementbyId("botao1");
let botao2 = document.getElementById("botao2");
//manipuladores de eventos
botao.onclick = function(){
    alert("primeiro de evento");
};

//segunda ação
botao2.onmouseover = function() {
    alert("Teste");
    botao2.style.backgroundColor = "red"
    
};