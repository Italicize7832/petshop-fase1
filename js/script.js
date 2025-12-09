/*
  Petshop - Fase 2
  Scripts gerais do site
*/

// Script inicial
console.log("Petshop Fase 2 - JS carregado");

// Inicialização do carrossel
document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector("#carouselPetshop");

  // Verifica se o elemento existe e se o Bootstrap JS carregou
  if (el && typeof bootstrap !== "undefined") {
    new bootstrap.Carousel(el, {
      interval: 3000,
      ride: "carousel",
      pause: false,
      wrap: true
    });
  }
});
