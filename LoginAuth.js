const urlApi = "https://673bf1c296b8dcd5f3f7f885.mockapi.io/Lugares";
const button = document.getElementById("btn"); //  buton de submit

let users = []; // la data se almacena aca

// Fetch para iterar la data de la api
fetch(urlApi)
  .then((res) => res.json())
  .then((data) => {
    users = data; 
  })
  .catch((error) => {
    console.error(error);
  });

button.addEventListener("click", (e) => {
  e.preventDefault();

  // User data (form)
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  

  // Validar si el usuario existe en la api
  const usersData = users.find((credential) => {
    return credential.email === email && credential.password === password;
  });

  if (usersData) {
    alert("Has iniciado sesión con éxito");
    window.location.href = "Blog.html";
  } else {
    alert("Email o contraseña son inválidos");
  }
});


    



