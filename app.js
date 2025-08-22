const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();

// Dados de exemplo (substituiremos por API depois)
const artigos = [
  {
    titulo: "Clássico termina em empate e disputa vai para o jogo de volta",
    resumo: "Partida eletrizante com direito a virada e pênalti nos acréscimos.",
    img: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1200&auto=format&fit=crop",
    fonte: "Redação",
    categoria: "Futebol",
    url: "#"
  },
  {
    titulo: "Time brasileiro estreia com vitória na liga continental",
    resumo: "Atuação sólida na defesa e contra-ataque mortal garantem os 3 pontos.",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
    fonte: "Agência Esportiva",
    categoria: "Basquete",
    url: "#"
  },
  {
    titulo: "Seleção feminina conquista título inédito",
    resumo: "Campanha perfeita e destaque para a atuação da goleira na final.",
    img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
    fonte: "Assessoria",
    categoria: "Vôlei",
    url: "#"
  }
];

const grid = document.getElementById('newsGrid');
const search = document.getElementById('search');
const btnClear = document.getElementById('btnClear');

function render(lista) {
  grid.innerHTML = "";
  lista.forEach(n => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${n.img}" alt="${n.categoria}" loading="lazy" />
      <div class="content">
        <div class="meta">
          <span class="tag">${n.categoria}</span>
          <span>${n.fonte}</span>
        </div>
        <h3>${n.titulo}</h3>
        <p>${n.resumo}</p>
        <div class="actions">
          <a href="${n.url}" target="_blank" rel="noopener">Ler matéria</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

render(artigos);

if (search) {
  search.addEventListener('input', () => {
    const q = search.value.toLowerCase();
    const filtrados = artigos.filter(a =>
      a.titulo.toLowerCase().includes(q) ||
      a.resumo.toLowerCase().includes(q) ||
      a.categoria.toLowerCase().includes(q)
    );
    render(filtrados);
  });
}

if (btnClear) {
  btnClear.addEventListener('click', () => {
    search.value = "";
    render(artigos);
    search.focus();
  });
}
