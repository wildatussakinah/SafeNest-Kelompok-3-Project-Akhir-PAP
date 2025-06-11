const experts = [
  {
    name: "Ida Bagus, M.Psi.",
    role: "Psikolog Klinis",
    image: "assets/konsultasi_page 2_person 7_ida bagus.jpg",
    color: "blue",
    konsultasiLink: "Konsultasi_ChatBot.html",
    profileLink: "Konsultasi_Profil.html"
  },
  {
    name: "Annisa Axelta, M.Psi.",
    role: "Psikolog Klinis",
    image: "assets/konsultasi_page 2_person 8_annisa axelta.jpg",
    color: "pink"
  },
  {
    name: "Indira Tandiono, M.Psi.",
    role: "Konselor",
    image: "assets/konsultasi_page 1_person 3_indira tandiono.jpeg",
    color: "pink"
  },
  {
    name: "Zulfan Reza, M.Psi.",
    role: "Psikolog Klinis",
    image: "assets/konsultasi_page 1_person 4_zulfan reza.jpeg",
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
