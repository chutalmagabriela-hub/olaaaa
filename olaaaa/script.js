window.addEventListener("load", () => {
setTimeout(() => {
const loader = document.getElementById("loader-screen");
const card = document.getElementById("card-screen");
if (loader) loader.style.display = "none";
if (card) card.classList.remove("hidden");
}, 2000);
});

function mostrarRamo() {
const card = document.getElementById("card-screen");
const ramo = document.getElementById("ramo-screen");
if (card) card.classList.add("hidden");
if (ramo) ramo.classList.remove("hidden");
}