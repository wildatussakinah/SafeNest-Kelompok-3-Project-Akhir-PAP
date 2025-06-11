const experts = [
  {
    name: "Ida Bagus, M.Psi.",
    role: "Psikolog Klinis",
    image: "IdaBagus.jpeg",
    color: "blue",
    konsultasiLink: "ChatBotKonsultasi.html",
    profileLink: "ProfilKonsultasi.html"
  },
  {
    name: "Annisa Axelta, M.Psi.",
    role: "Psikolog Klinis",
    image: "Annisa.jpeg",
    color: "pink"
  },
  {
    name: "Indira Tandiono, M.Psi.",
    role: "Konselor",
    image: "Indira.jpeg",
    color: "pink"
  },
  {
    name: "Zulfan Reza, M.Psi.",
    role: "Psikolog Klinis",
    image: "Zulfan.jpeg",
    color: "blue"
  }
];

const container = document.getElementById("card-container");
const searchInput = document.getElementById("search");

function renderCards(filter = "") {
  container.innerHTML = "";
  experts
    .filter(expert =>
      expert.name.toLowerCase().includes(filter.toLowerCase()) ||
      expert.role.toLowerCase().includes(filter.toLowerCase())
    )
    .forEach((expert, index) => {
      const card = document.createElement("div");
      card.className = `card ${expert.color}`;
      card.innerHTML = `
        <img src="${expert.image}" alt="${expert.name}">
        <h3>${expert.name}</h3>
        <p>${expert.role}</p>
        <div class="card-buttons">
          ${expert.konsultasiLink
            ? `<a href="${expert.konsultasiLink}" class="btn-konsultasi">Konsultasi</a>`
            : `<button class="btn-konsultasi" disabled style="opacity: 0.6; cursor: default;">Konsultasi</button>`
          }
          <button class="btn-profil" data-index="${index}">Lihat Profil</button>
        </div>
      `;
      container.appendChild(card);
    });

  document.querySelectorAll(".btn-profil").forEach(button => {
    button.addEventListener("click", function () {
      const expert = experts[this.dataset.index];
      if (expert.profileLink) {
        window.location.href = expert.profileLink;
      } else {
        alert("Mohon maaf, untuk Profil ini masih belum tersedia.");
      }
    });
  });
}

searchInput.addEventListener("input", () => renderCards(searchInput.value));
renderCards();

const gearIcon = document.getElementById("gearIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

gearIcon.addEventListener("click", () => {
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", function (e) {
  if (!gearIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = "none";
  }
});
