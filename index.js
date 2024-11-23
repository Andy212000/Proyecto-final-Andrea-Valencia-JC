// obtener el valor actual de la visita
let visitas = localStorage.getItem('visitas');

const buttom = document.querySelector(".btn")

const visitantes = document.querySelector(".visitantes")



// si es la primera visita, inicializar el valor a 1
if (visitas === null) {
  visitas = 1;
  visitantes.innerHTML = visitas
} else {
  // si no es la primera visita, incrementar el valor
  visitas = parseInt(visitas) + 1;
  visitantes.innerHTML = visitas
}

// guardar el nuevo valor de la visita
localStorage.setItem("visitas", visitas);



// reiniciar visitas

function reiniciarVisitas() {
  visitantes.innerHTML = 0
  localStorage.removeItem("visitas");
  location.reload();
}

buttom.addEventListener("click", reiniciarVisitas)
