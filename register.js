function validateForm() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.querySelectorAll("input[type='password']")[0].value;
  const confirmPassword = document.querySelectorAll("input[type='password']")[1].value;

  if (username === "") {
    alert("Username samaran wajib diisi!");
    return false;
  }

  if (password.length < 6) {
    alert("Password harus terdiri dari minimal 6 karakter.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Konfirmasi password tidak cocok.");
    return false;
  }

  alert("Pendaftaran berhasil! Silakan login.");
  window.location.href = "login.html"; // arahkan ke halaman login
  return false; // agar tidak reload halaman
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