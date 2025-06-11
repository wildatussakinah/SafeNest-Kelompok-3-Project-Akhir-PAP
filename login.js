function loginUser() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Harap isi semua kolom.");
    return false;
  }

  // Simulasi login
  alert("Login berhasil!");
  window.location.href = "home.html"; // arahkan ke halaman utama
  return false;
}

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