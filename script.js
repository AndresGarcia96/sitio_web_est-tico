document.querySelector("form").addEventListener("submit", function (event) {
  const nombre = document.getElementById("nombre").value;
  const motivo = document.getElementById("motivo").value;
  const email = document.getElementById("email").value;

  if (!nombre || !motivo || !email) {
    alert("Por favor, complete todos los campos.");
    event.preventDefault();
  }
});
