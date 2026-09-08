const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (evento) {
evento.preventDefault();

const nome = document.querySelector("#nome").value;
const genero = document.querySelector("#genero").value;
const audio = document.querySelector("#audio").value;
const filme = document.querySelector("#filme").value;
const filmeserie = document.querySelector("#filmeserie").value;
const canaisapp = document.querySelector("#canaisapp").value;

resultado.textContent = `Obrigado, ${nome}! Voce ve sempre ${filmeserie}, voce prefere filmes/series de ${genero}. Seu canal/aplicativo favorito é ${canaisapp} e seu filme favorito é ${filme}, idioma será ${audio}.`;formulario.reset ();
});
