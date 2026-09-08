const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (evento) {
evento.preventDefault();

const nome = document.querySelector("#nome").value;
const genero = document.querySelector("#genero").value;
const audio = document.querySelector("#audio").value;
const filme = document.querySelector("#filme").value;
const filme-serie = document.querySelector("#filme-serie").value;
const canais-app = document.querySelector("#canais-app").value;

resultado.textContent = `Obrigado, ${nome}! Voce ve sempre ${filme-serie}, voce prefere filmes/series de ${genero}. Seu canal/aplicativo favorito é ${canais-app} e seu filme favorito é ${filme}, idioma será ${audio}`;formulario.reset ();
});
