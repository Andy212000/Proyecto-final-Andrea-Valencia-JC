const myForm = document.getElementById("form");
const url = "https://673bf1c296b8dcd5f3f7f885.mockapi.io/Lugares"
const container = document.querySelector(".data")



myForm.addEventListener("submit",(event) =>{
    event.preventDefault();

    const formData= {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }).then(res => res.json())
      .then(data => console.log(data))
      .then(alert("Te has registrado"))
      .then(error =>console.log(error))  
 }
)




