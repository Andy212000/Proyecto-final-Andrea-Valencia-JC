const myForm = document.getElementById("form");
const url = "https://673bf1c296b8dcd5f3f7f885.mockapi.io/Lugares"
const container = document.querySelector(".data")


fetch(url)
.then(res => res.json())
.then(datos => {
    datos.forEach(dato => {
        console.log(dato.destino)
        container.innerHTML = dato.destino
    })
})



function display(dato){
    container.app = dato.destino

}

myForm.addEventListener("submit",() =>{
    event.preventDefault();

    const formData= {
        destino: document.getElementById("destino").value
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }).then(res => res.json())
      .then(data => console.log(data))
      .then(error =>console.log(error))  
 }
)




