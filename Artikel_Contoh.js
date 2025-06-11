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
