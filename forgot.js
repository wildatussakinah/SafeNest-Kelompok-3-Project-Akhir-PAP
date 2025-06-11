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