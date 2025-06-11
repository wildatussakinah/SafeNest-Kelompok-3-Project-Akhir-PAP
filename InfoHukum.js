document.addEventListener("DOMContentLoaded", function () {
  const gearIcon = document.getElementById("gearIcon");
  const dropdownMenu = document.getElementById("dropdownMenu");

  // Toggle dropdown saat ikon gear diklik
  gearIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Hindari menutup saat klik pada icon
    dropdownMenu.classList.toggle("show");
  });

  // Tutup dropdown jika klik di luar menu
  document.addEventListener("click", function (event) {
    if (!dropdownMenu.contains(event.target) && event.target !== gearIcon) {
      dropdownMenu.classList.remove("show");
    }
  });
});