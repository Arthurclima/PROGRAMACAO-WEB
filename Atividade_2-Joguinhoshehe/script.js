// Adivinhe o Número Secreto
const numero_secreto = Math.floor(Math.random() * 20) + 1;

let botao = document.getElementById("CHT");

botao.onclick = function(){
    let acertou = false;

    while (!acertou) {
        let palpite = parseInt(prompt("Digite um número entre 1 e 20:"), 10);

        if (isNaN(palpite)) {
            alert("Por favor, digite um número válido.");
            continue;
        }

        if (palpite > numero_secreto) {
            alert("O número secreto é menor! Tente novamente.");
        } else if (palpite < numero_secreto) {
            alert("O número secreto é maior! Tente novamente.");
        } else {
            alert(`Parabéns! Você acertou o número secreto ${numero_secreto}!`);
            acertou = true;
        }
    }
};

// Pedra, Papel e Tesoura
const opcoes = ["Pedra", "Papel", "Tesoura"];

let botaoPPT = document.getElementById("PPT");

botaoPPT.onclick = function() {
    let jogador = prompt("Escolha: Pedra, Papel ou Tesoura").toLowerCase();
    let computador = opcoes[Math.floor(Math.random() * opcoes.length)].toLowerCase();

    console.log(`Jogador: ${jogador}`);
    console.log(`Computador: ${computador}`);

    if (jogador === computador) {
        alert(`Empate! Jogador: ${jogador} / Computador: ${computador}`);
    } else if ((jogador === "pedra" && computador === "tesoura") ||
               (jogador === "papel" && computador === "pedra") ||
               (jogador === "tesoura" && computador === "papel")) {
        alert(`Você ganhou! Jogador: ${jogador} / Computador: ${computador}`);
    } else {
        alert(`Você perdeu! Jogador: ${jogador} / Computador: ${computador}`);
    }
};

// Tabuada
let botaoTBD = document.getElementById("TBD");

botaoTBD.onclick = function() {
    let numero = parseInt(prompt("Digite um número para ver a tabuada:"), 10);
    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    let resultado = `Tabuada do ${numero}:\n`;
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(resultado);
};

// Triangulo de Asteriscos
let botaoTRI = document.getElementById("TRI");
botaoTRI.onclick = function() {
    let altura = parseInt(prompt("Digite a altura do triângulo de asteriscos:"), 10);
    if (isNaN(altura) || altura <= 0) {
        alert("Por favor, digite um número válido e positivo.");
        return;
    }
    let resultado = "";
    for (let i = 1; i <= altura; i++) {
        let espacos = " ".repeat(altura - i);
        let estrelas = "*".repeat(i);
        resultado += espacos + estrelas + "\n";
    }
    alert(resultado);
};

// Somas em série
let botaoSOM = document.getElementById("SOM");
botaoSOM.onclick = function() {
    const n = parseInt(prompt("Digite um número para calcular a soma em série:"));
    let soma = 0;
    let termoAtual = 0;
    let stringSerie = " ";
    
    for (let i = 1; i <= n; i++) {
        termoAtual = (termoAtual * 10) + 1;
        soma += termoAtual;
        if ( i === n) {
            stringSerie += termoAtual;
        } else {
            stringSerie += termoAtual + " + ";
        }
    }

    console.log(stringSerie);
    alert (`Série: ${stringSerie} \n Soma: ${soma}`);
    
}
    
