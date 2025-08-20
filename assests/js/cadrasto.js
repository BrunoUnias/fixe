document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const footer = document.querySelector(".footer");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const userName = document.getElementById("username").value.trim();
    const passWord = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!fullName || !email || !userName || !passWord || !confirmPassword) {
      footer.textContent = "C:\\> Erro: Todos os campos são obrigatórios.";
      footer.style.color = "red";
      return;
    }

    if (passWord !== confirmPassword) {
      footer.textContent = "C:\\> Erro: As senhas não coincidem.";
      footer.style.color = "red";
      return;
    }

    footer.textContent =
      "C:\\> Cadastro realizado com sucesso. Bem-vindo(a), " + userName + "!";
    footer.style.color = "lime";

    form.reset();
  });
});