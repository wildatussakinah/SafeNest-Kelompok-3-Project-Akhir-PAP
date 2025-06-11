// Dropdown pengaturan
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
