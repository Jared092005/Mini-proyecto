let botoncito = document.querySelector("#btndark");
let documento = document.querySelector("html");

function cambiarModo() {
  documento.classList.toggle("dark");
}

botoncito.addEventListener("click", cambiarModo);

export { cambiarModo };
