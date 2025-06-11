document.addEventListener('DOMContentLoaded', function () {
  const chatBox = document.getElementById('chat-box');
  const messageInput = document.getElementById('message-input');
  const sendBtn = document.getElementById('send-btn');

  sendBtn.addEventListener('click', function () {
    const message = messageInput.value.trim();
    if (message) {
      const userMessage = document.createElement('div');
      userMessage.className = 'user-message';
      userMessage.textContent = message;
      chatBox.appendChild(userMessage);

      messageInput.value = '';

      chatBox.scrollTop = chatBox.scrollHeight;

      setTimeout(() => {
        const botReply = document.createElement('div');
        botReply.className = 'bot-message';
        botReply.textContent = "Terima kasih sudah berbagi. Bisa ceritakan lebih lanjut?";
        chatBox.appendChild(botReply);
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 1000);
    }
  });

  messageInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendBtn.click();
    }
  });
});

const gearIcon = document.getElementById("gearIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

gearIcon.addEventListener("click", () => {
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", function(e) {
  if (!gearIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = "none";
  }
});
