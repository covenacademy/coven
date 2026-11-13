
const potions = [
  {
    id: 1, name: "Elixir Restaurador", category: "Cura", icon: "✚", glow: "#4d9b78",
    short: "Uma preparação conhecida por auxiliar na recuperação de energia.",
    description: "Um elixir de tonalidade verde, tradicionalmente associado à restauração e ao equilíbrio das forças vitais.",
    purpose: "Auxilia na recuperação de energia após atividades mágicas intensas.",
    difficulty: "Intermediária", duration: "Efeito temporário",
    sideEffects: "Cansaço leve quando usado em excesso.",
    ingredients: ["Orvalho de folhas antigas", "Pétalas de lírio branco", "Essência verdejante", "Água da fonte lunar"]
  },
  {
    id: 2, name: "Poção da Clarividência", category: "Percepção", icon: "✧", glow: "#9b68bd",
    short: "Associada a vislumbres simbólicos de possibilidades futuras.",
    description: "Uma mistura violeta estudada por aprendizes que desejam compreender sinais, presságios e possibilidades.",
    purpose: "Permite vislumbrar imagens simbólicas de possíveis acontecimentos.",
    difficulty: "Avançada", duration: "Alguns minutos",
    sideEffects: "Visões fragmentadas e dificuldade temporária de concentração.",
    ingredients: ["Artemísia prateada", "Pétalas de lótus lunar", "Pó de ametista", "Essência de névoa"]
  },
  {
    id: 3, name: "Elixir de Proteção", category: "Proteção", icon: "⬡", glow: "#5b91b9",
    short: "Um preparado simbólico para reforçar barreiras mágicas.",
    description: "Mantido nos arquivos de defesa alquímica, este elixir representa a criação de uma camada protetora ao redor de seu portador.",
    purpose: "Reforça temporariamente escudos e barreiras mágicas.",
    difficulty: "Intermediária", duration: "Até uma hora",
    sideEffects: "Pode tornar outras conjurações menos precisas durante sua duração.",
    ingredients: ["Sal de prata", "Casca de carvalho", "Pó de quartzo", "Gotas de chuva"]
  },
  {
    id: 4, name: "Poção da Vitalidade", category: "Fortalecimento", icon: "✺", glow: "#c18a50",
    short: "Relacionada ao vigor e à disposição durante práticas mágicas.",
    description: "Um líquido âmbar que aparece em antigos registros de alquimia como símbolo de vigor e determinação.",
    purpose: "Amplifica temporariamente a disposição e a energia mágica.",
    difficulty: "Básica", duration: "Cerca de trinta minutos",
    sideEffects: "Agitação e dificuldade para relaxar após o efeito.",
    ingredients: ["Raiz dourada", "Mel silvestre", "Pólen solar", "Casca de canela"]
  },
  {
    id: 5, name: "Elixir Onírico", category: "Percepção", icon: "☾", glow: "#6489b7",
    short: "Vinculado ao estudo dos sonhos e da memória onírica.",
    description: "De brilho azulado, é descrito em manuscritos como uma poção ligada ao território dos sonhos e aos símbolos do inconsciente.",
    purpose: "Favorece sonhos lúcidos e recordação de imagens oníricas.",
    difficulty: "Avançada", duration: "Durante um ciclo de sono",
    sideEffects: "Sonhos intensos e sensação de desorientação ao despertar.",
    ingredients: ["Lavanda azul", "Pétalas de flor-da-noite", "Pó de pedra da lua", "Essência de névoa"]
  },
  {
    id: 6, name: "Poção da Metamorfose", category: "Transformação", icon: "❋", glow: "#b56b83",
    short: "Permite assumir temporariamente a forma de animais de pequeno porte.",
    description: "Uma preparação rara destinada à metamorfose animal. Seus registros descrevem transformações temporárias em criaturas pequenas, preservando a consciência e a identidade do usuário.",
    purpose: "Transforma o usuário em animais de pequeno porte, como gatos, corvos, pássaros e criaturas de tamanho semelhante. Não permite assumir formas humanas ou de animais grandes.",
    difficulty: "Especialista", duration: "Até algumas horas",
    sideEffects: "Dificuldade temporária para retornar à forma original quando a transformação sofre interferência mágica.",
    ingredients: ["Essência camaleônica", "Pétalas de rosa escura", "Pó de madrepérola", "Orvalho da meia-noite"]
  },
  {
    id: 7, name: "Poção da Verdade", category: "Percepção", icon: "✧", glow: "#78a9b5",
    short: "Dificulta esconder informações ou mentir enquanto seu efeito estiver ativo.",
    description: "Uma poção translúcida utilizada em antigos interrogatórios mágicos. Sua influência afeta a capacidade de ocultar deliberadamente a verdade.",
    purpose: "Faz quem a toma revelar a verdade, tornando extremamente difícil mentir ou esconder informações.",
    difficulty: "Avançada", duration: "Alguns minutos",
    sideEffects: "Fala involuntária e dificuldade para filtrar informações pessoais.",
    ingredients: ["Essência de cristal", "Lírio branco", "Orvalho prateado", "Pó de quartzo"]
  },
  {
    id: 8, name: "Tônico da Velocidade", category: "Fortalecimento", icon: "➤", glow: "#c18a50",
    short: "Concede velocidade extraordinária por um período limitado.",
    description: "Um tônico desenvolvido para intensificar a agilidade e os reflexos de quem o utiliza.",
    purpose: "Aumenta drasticamente a velocidade do usuário, tornando-o extremamente rápido e difícil de acompanhar, embora ainda seja inferior à velocidade de um vampiro.",
    difficulty: "Avançada", duration: "Alguns minutos",
    sideEffects: "Cansaço acentuado e perda temporária de coordenação após o efeito.",
    ingredients: ["Raiz de vento", "Pólen solar", "Essência de tempestade", "Folhas de louro"]
  },
  {
    id: 9, name: "Poção do Delírio", category: "Percepção", icon: "☾", glow: "#a16bc1",
    short: "Provoca alucinações e distorce a percepção da realidade.",
    description: "Uma preparação de natureza ilusória que interfere na percepção sensorial de quem a ingere.",
    purpose: "Quando ingerida sob coerção, provoca alucinações e faz o indivíduo perder a noção da realidade, deixando-o vulnerável enquanto durar o efeito.",
    difficulty: "Especialista", duration: "Variável",
    sideEffects: "Confusão mental e dificuldade temporária para distinguir ilusões da realidade.",
    ingredients: ["Flor de beladona fictícia", "Pó de ametista", "Essência de névoa", "Pétalas de flor-da-noite"]
  },
  {
    id: 10, name: "Poção do Enxame", category: "Transformação", icon: "✺", glow: "#c19b45",
    short: "Invoca um enxame mágico que permite ao usuário voar.",
    description: "Uma poção incomum que manifesta um enxame de abelhas mágicas ao redor do corpo de quem a ingere.",
    purpose: "Faz surgir abelhas mágicas que envolvem o usuário e permitem que ele se eleve e se locomova livremente pelo ar.",
    difficulty: "Especialista", duration: "Até alguns minutos",
    sideEffects: "O enxame pode se dispersar caso a concentração mágica seja interrompida.",
    ingredients: ["Mel dourado", "Pólen encantado", "Essência de flores silvestres", "Orvalho solar"]
  },
  {
    id: 11, name: "Poção da Intangibilidade", category: "Proteção", icon: "◇", glow: "#8299b4",
    short: "Permite atravessar objetos sólidos temporariamente.",
    description: "Uma poção de tonalidade pálida que altera temporariamente a interação física do corpo com a matéria.",
    purpose: "Torna o corpo incapaz de interagir fisicamente com a matéria, permitindo atravessar objetos sólidos.",
    difficulty: "Especialista", duration: "Alguns minutos",
    sideEffects: "Sensação temporária de instabilidade ao recuperar a forma física.",
    ingredients: ["Essência de névoa", "Pó de quartzo lunar", "Água espectral", "Pétalas translúcidas"]
  },
  {
    id: 12, name: "Elixir do Reflexo", category: "Ilusão", icon: "❖", glow: "#9b83b7",
    short: "Cria uma cópia ilusória do próprio usuário.",
    description: "Um elixir utilizado em estudos de ilusão e duplicação visual. A cópia reproduz a aparência do usuário, mas não possui existência física.",
    purpose: "Cria uma cópia mágica controlada pelo usuário. A imagem é apenas uma ilusão e desaparece quando tocada.",
    difficulty: "Avançada", duration: "Até alguns minutos",
    sideEffects: "A cópia pode perder estabilidade quando o usuário perde a concentração.",
    ingredients: ["Pó de espelho", "Essência prateada", "Água lunar", "Pétalas de íris"]
  },
  {
    id: 13, name: "Poção da Visão Arcana", category: "Percepção", icon: "◉", glow: "#6a9d9b",
    short: "Revela rastros de magia e energias sobrenaturais.",
    description: "Uma poção de estudo perceptivo que permite observar manifestações mágicas normalmente invisíveis aos olhos comuns.",
    purpose: "Permite enxergar rastros de magia, encantamentos e energias sobrenaturais.",
    difficulty: "Intermediária", duration: "Cerca de trinta minutos",
    sideEffects: "Excesso de estímulos visuais em ambientes com muita atividade mágica.",
    ingredients: ["Pó de safira", "Olho-de-lua fictício", "Essência arcana", "Orvalho azul"]
  },
  {
    id: 14, name: "Elixir da Memória", category: "Percepção", icon: "✦", glow: "#a879a2",
    short: "Amplia o acesso a lembranças antigas e detalhes esquecidos.",
    description: "Um elixir estudado por pesquisadores da mente, capaz de facilitar a exploração de recordações pessoais.",
    purpose: "Permite recuperar detalhes esquecidos ou ocultos pela mente e acessar lembranças antigas com grande precisão.",
    difficulty: "Especialista", duration: "Até uma hora",
    sideEffects: "Cansaço mental e confusão entre lembranças muito antigas.",
    ingredients: ["Alecrim prateado", "Pó de ametista", "Essência de memória", "Lavanda lunar"]
  },
  {
    id: 15, name: "Poção da Sombra", category: "Proteção", icon: "◐", glow: "#625477",
    short: "Envolve o usuário em sombras e dificulta sua identificação.",
    description: "Uma poção de tonalidade escura que manifesta uma camada de sombra viva ao redor do corpo.",
    purpose: "Dificulta a identificação do usuário e permite que ele desapareça brevemente em ambientes escuros.",
    difficulty: "Avançada", duration: "Alguns minutos",
    sideEffects: "O efeito perde força em ambientes muito iluminados.",
    ingredients: ["Pétalas de flor-negra", "Cinzas lunares", "Essência de penumbra", "Água da meia-noite"]
  }
];

const grid = document.querySelector("#potion-grid");
const searchInput = document.querySelector("#search-input");
const filters = [...document.querySelectorAll(".filter")];
const emptyState = document.querySelector("#empty-state");
const resultCount = document.querySelector("#result-count");
const modal = document.querySelector("#potion-modal");
const closeButton = document.querySelector("#modal-close");
let activeFilter = "Todas";

function renderPotions() {
  const search = searchInput.value.trim().toLocaleLowerCase("pt-BR");

  const filtered = potions.filter(potion => {
    const matchesCategory = activeFilter === "Todas" || potion.category === activeFilter;
    const matchesSearch = `${potion.name} ${potion.category} ${potion.short}`.toLocaleLowerCase("pt-BR").includes(search);
    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = filtered.map(potion => `
    <button class="potion-card" type="button" data-id="${potion.id}" style="--glow:${potion.glow}" aria-label="Ver detalhes de ${potion.name}">
      <div class="card-art"><span class="potion-icon">${potion.icon}</span></div>
      <div class="card-info">
        <span class="card-category">${potion.category}</span>
        <h3>${potion.name}</h3>
        <p>${potion.short}</p>
        <span class="card-link">CONSULTAR REGISTRO ↗</span>
      </div>
    </button>
  `).join("");

  resultCount.textContent = String(filtered.length).padStart(2, "0");
  emptyState.hidden = filtered.length !== 0;
}

function openPotion(id) {
  const potion = potions.find(item => item.id === Number(id));
  if (!potion) return;

  document.querySelector("#modal-category").textContent = `REGISTRO ALQUÍMICO • ${potion.category}`;
  document.querySelector("#modal-title").textContent = potion.name;
  document.querySelector("#modal-description").textContent = potion.description;
  document.querySelector("#modal-purpose").textContent = potion.purpose;
  document.querySelector("#modal-difficulty").textContent = potion.difficulty;
  document.querySelector("#modal-duration").textContent = potion.duration;
  document.querySelector("#modal-side-effects").textContent = potion.sideEffects;
  document.querySelector("#modal-ingredients").innerHTML = potion.ingredients.map(item => `<li>${item}</li>`).join("");

  const visual = document.querySelector("#modal-visual");
  visual.style.setProperty("--modal-glow", potion.glow);
  visual.querySelector("span").textContent = potion.icon;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  closeButton.focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

grid.addEventListener("click", event => {
  const card = event.target.closest(".potion-card");
  if (card) openPotion(card.dataset.id);
});

searchInput.addEventListener("input", renderPotions);

filters.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filters.forEach(item => item.classList.toggle("active", item === button));
    renderPotions();
  });
});

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
});

renderPotions();
