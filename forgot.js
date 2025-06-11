document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("forgotPasswordForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (!email) {
      alert("Mohon isi email terlebih dahulu.");
      return;
    }

    // Validasi format email sederhana
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Format email tidak valid. Mohon masukkan email yang benar.");
        return;
    }
    
    // Simulasi pengiriman link reset password
    alert("Link reset password telah dikirim ke " + email + ". Silakan cek email Anda.");
    window.location.href = "login.html";
  });
});

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