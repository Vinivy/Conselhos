const Aconselhamento = document.querySelector('#Gerar');
const areaFrase = document.querySelector('.Conselhos');
const adviceId = document.querySelector('#NumberAdvice');

//buscando e transformando em json
async function pegarConselhos() {
    const url = "https://api.adviceslip.com/advice";
    const resposta = await fetch(url);
    return await resposta.json();
}

async function gerandoConselhos() {
    const conselhos = await pegarConselhos();
    Aconselhamento.addEventListener('click', gerandoConselhos);
    adviceId.innerHTML = `ADVICE #${conselhos.slip.id}`;
    areaFrase.innerHTML = `"${conselhos.slip.advice}"`
}     

gerandoConselhos();