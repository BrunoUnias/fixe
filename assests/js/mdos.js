 document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const footer = document.querySelector(".footer");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // Credenciais simuladas
      const USER = "admin";
      const PASS = "1234";

      if (username === USER && password === PASS) {
        footer.textContent = "C:\\> Login bem-sucedido. Bem-vindo, " + username + "!";
        footer.style.color = "lime";
      } else {
        footer.textContent = "C:\\> Erro: Usuário ou senha inválidos.";
        footer.style.color = "red";
      }
    });
  });