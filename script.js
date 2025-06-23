const perguntaEl = document.getElementById("pergunta");
const alternativasEl = document.getElementById("alternativas");
const resultadoEl = document.getElementById("resultado");

const pergunta = "A IA deve ser usada para substituir ou auxiliar os humanos?";
const alternativas = [
    { texto: "Substituir completamente", resultado: "Talvez devêssemos pensar melhor sobre isso." },
    { texto: "Auxiliar e colaborar", resultado: "Excelente escolha! A IA deve ajudar, não dominar." },
    { texto: "Nenhuma das opções", resultado: "Respeitamos sua opinião. O debate continua!" }
];

perguntaEl.textContent = pergunta;

alternativas.forEach((alt) => {
    const botao = document.createElement("button");
    botao.textContent = alt.texto;
    botao.onclick = () => {
        resultadoEl.textContent = alt.resultado;
    };
    alternativasEl.appendChild(botao);
});
