// navbar gear icon functionality
document.addEventListener("DOMContentLoaded", () => {
  const gearIcon = document.getElementById("gearIcon");
  const dropdownMenu = document.getElementById("dropdownMenu");

  gearIcon.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!gearIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove("show");
    }
  });
});