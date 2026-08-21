
const nomeEntrada = document.getElementById("nome-entrada");
const nomeSaida = document.getElementById("nome-saida");
const btnTroca = document.getElementById("btn-troca");

btnTroca.addEventListener('click', () => {
nomeSaida.textContent = nomeEntrada.value;
})

btnTroca.addEventListener('mouseenter', () => { nomeSaida.style.color = "#731097"});

btnTroca.addEventListener('mouseout', () => { nomeSaida.style.color = "#080707" });

// Trocando a cor da caixa



const btnVerde = document.getElementById("btn-verde");
const btnAmarelo = document.getElementById("btn-amarelo");
const btnAzul = document.getElementById("btn-azul");
const caixa = document.getElementById("caixa");

btnVerde.addEventListener('click', () => { caixa.style.backgroundColor = "green";});

btnAmarelo.addEventListener('click', () => { caixa.style.backgroundColor = "yellow";});

btnAzul.addEventListener('click', () => { caixa.style.backgroundColor = "blue";});