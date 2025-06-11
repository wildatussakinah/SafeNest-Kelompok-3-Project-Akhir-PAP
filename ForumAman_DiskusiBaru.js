const gearIcon = document.getElementById("gearIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

gearIcon.addEventListener("click", () => {
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (event) => {
  if (!gearIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.style.display = "none";
  }
});

document.getElementById('formDiskusi').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const judul = document.getElementById('judul').value.trim();
  const isi = document.getElementById('isi').value.trim();

  if (judul && isi) {
    alert('Diskusi berhasil dibagikan!\n\nJudul: ' + judul + '\nIsi: ' + isi);
    this.reset();
  } else {
    alert('Silakan isi semua kolom.');
  }
});
