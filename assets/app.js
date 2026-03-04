// ===== CONFIG (edite aqui) =====
const CONFIG = {
  whatsappNumber: "5511999999999", // 55 + DDD + número
  baseMessage: "Olá! Preciso de atendimento sobre: "
};

let selected = "";

function setSelected(name){
  selected = name;
  const el = document.getElementById("selectedService");
  if(el) el.textContent = name || "—";
}

function openWhatsApp(){
  if(!selected){
    alert("Selecione um serviço para continuar.");
    return;
  }
  const msg =
    `${CONFIG.baseMessage}${selected}\n\n` +
    `Nome: \nCPF/CNPJ: \nCidade/UF: \n`;
  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  document.querySelectorAll(".srv").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".srv").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      setSelected(btn.dataset.service || "");
    });
  });

  document.getElementById("btnStart").addEventListener("click", openWhatsApp);
  document.getElementById("btnClear").addEventListener("click", () => {
    document.querySelectorAll(".srv").forEach(b => b.classList.remove("active"));
    setSelected("");
    // foco nos serviços
    document.querySelector(".services")?.scrollIntoView({behavior:"smooth", block:"start"});
  });
});
