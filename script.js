const statusEl = document.getElementById("status");
const clockEl = document.getElementById("clock");
const btn = document.getElementById("btn");
const apiEl = document.getElementById("api");
function tick() {
const now = new Date();
clockEl.textContent = now.toLocaleTimeString("pt-BR");
}
setInterval(tick, 1000);
tick();
statusEl.textContent = "Site carregado com sucesso. (Sem Node, sem instalacao.)";
btn.addEventListener("click", async () => {
apiEl.textContent = "Consultando API...";
try {
const resp = await fetch("https://api.agify.io?name=rafael");
if (!resp.ok) throw new Error("HTTP " + resp.status);
const data = await resp.json();
apiEl.textContent = JSON.stringify(data, null, 2);
} catch (err) {
apiEl.textContent = "Erro no fetch: " + err.message;
}

Página 4

});
Parte D - Ativar o GitHub Pages (10-15 min)
• No repositorio, clique em Settings (configuracoes).
• No menu lateral, clique em Pages.
• Em Build and deployment, escolha: Deploy from a branch.
• Em Branch, selecione main e pasta /(root). Clique em Save.
• Aguarde o GitHub gerar o link (pode levar 1-3 minutos).
