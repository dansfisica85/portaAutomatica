//getElementById significa "pegar elemento pelo id", ou seja, ele pega o elemento do html que tem o id "imgPorta" e armazena na variável img
const img = document.getElementById("imgPorta");

const ABERTA = "https://img.freepik.com/premium-vector/ajar-door-slightly-open-wooden-doorway-entrance-exit-doorframe-entry-portal-abstract-house-home-apartment-room-flat-graphic-vector-illustration-isolated-white-background_198278-22263.jpg";
const FECHADA = "https://img.freepik.com/vetores-premium/porta-fechada-de-vetor-com-moldura-isolada-no-fundo-eps-10_505557-495.jpg";

function abrirPorta() {
    img.src = ABERTA;
    //src significa "source", ou seja, ele muda a imagem para a imagem da porta aberta
    }

function fecharPorta() {
    img.src = FECHADA;
}

// Função para abrir a porta e depois fechá-la automaticamente após 3 segundos
function abrirEFechar() {
    abrirPorta();
    //temporizador para fechar a porta após 5 segundos
    setTimeout(fecharPorta, 5000);
}
//addEventListener espera ("fica escutado, esperando")
document.getElementById("abrirPorta").addEventListener("click", function () {
    const palavraChave = prompt("Digite a palavra-chave para abrir a porta:");
    //CONDICIONAL
    if (palavraChave === "adS") {
        abrirEFechar()
    } else {
        //ALERTA é uma popup
        alert("Você não acertou a palavra-chave. Tente novamente.");
    }
});


document.getElementById("fecharPorta").addEventListener("click", fecharPorta);

//mouseenter é o evento de passar o mouse por cima do elemento
//document.getElementById("identificaPessoa").addEventListener("mouseenter", abrirEFechar);

document.getElementById("identificaPessoa").addEventListener("mouseenter", function () {
    const senha = prompt("Digite a palavra-chave para abrir a porta:");
    //CONDICIONAL
    if (senha === "1234") {
        abrirEFechar()
    } else {
        //ALERTA é uma popup
        alert("Você não acertou a palavra-chave. Tente novamente.");
    }
});



