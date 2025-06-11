document.querySelector('.edit-btn').addEventListener('click', () => {
  alert("Fitur edit profil belum tersedia. :)");
});

document.querySelector('.logout').addEventListener('click', () => {
  document.getElementById("popupLogout").style.display = "flex";
});

function closePopup() {
  document.getElementById("popupLogout").style.display = "none";
}

function confirmLogout() {
  alert("Anda telah logout.");
  window.location.href = "home.html";
}
