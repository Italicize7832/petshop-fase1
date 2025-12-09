/*
  Petshop - Fase 2
  Scripts gerais do site
*/

console.log("Petshop Fase 2 - JS carregado");

// -----------------------------
// 1) Carrossel
// -----------------------------
function initCarousel() {
  const el = document.querySelector("#carouselPetshop");
  if (!el) return;

  if (typeof bootstrap !== "undefined") {
    new bootstrap.Carousel(el, {
      interval: 3000,
      ride: "carousel",
      pause: false,
      wrap: true
    });
  }
}

// -----------------------------
// 2) Função temporal (data/hora)
// -----------------------------
function initDataHora() {
  const el = document.querySelector("#dataHoraAtual");
  if (!el) return;

  function atualizar() {
    const agora = new Date();
    // Formato simples e legível
    const texto = agora.toLocaleString("pt-BR");
    el.textContent = `Data e hora: ${texto}`;
  }

  atualizar();
  setInterval(atualizar, 1000);
}

// -----------------------------
// 3) Formulário
// -----------------------------
function initFormularioAgendamento() {
  const form = document.querySelector("#formAgendamento");
  const resumo = document.querySelector("#resumoAgendamento");

  if (!form || !resumo) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeCliente = document.querySelector("#nomeCliente").value.trim();
    const nomePet = document.querySelector("#nomePet").value.trim();
    const servico = document.querySelector("#servico").value;
    const data = document.querySelector("#dataAgendamento").value;
    const hora = document.querySelector("#horaAgendamento").value;

    const metodoEl = document.querySelector('input[name="metodo"]:checked');
    const metodo = metodoEl ? metodoEl.value : "";

    const extras = [];
    const hidratacao = document.querySelector("#hidratação");
    const corteUnhas = document.querySelector("#corteUnhas");

    if (hidratacao && hidratacao.checked) extras.push(hidratacao.value);
    if (corteUnhas && corteUnhas.checked) extras.push(corteUnhas.value);

    let texto = `<strong>Agendamento confirmado!</strong><br>`;
    texto += `Cliente: ${nomeCliente}<br>`;
    texto += `Pet: ${nomePet}<br>`;
    texto += `Serviço: ${servico}<br>`;
    texto += `Método: ${metodo}<br>`;
    texto += `Data e hora: ${data} às ${hora}`;

    if (extras.length > 0) {
      texto += `<br>Extras: ${extras.join(", ")}`;
    }

    resumo.innerHTML = texto;
    resumo.classList.remove("d-none");
  });
}

// -----------------------------
// Inicialização geral
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  initCarousel();
  initDataHora();
  initFormularioAgendamento();
});
