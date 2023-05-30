// SE ENVIA LOS DATOS DE LA API AL LOCAL STORAGE

/* "use strict";

fetch('https://jsonplaceholder.typicode.com/users/10')
    .then(response => response.json())
    .then(json => {
        {
            let usuario ={
                name:json.name,
                username:json.username,
                email:json.email
            }
            guardarLocalStorage(usuario)
        }
    })


const guardarLocalStorage = (data)=>{
    localStorage.setItem('user',JSON.stringify(data))
} */

// BUSCA LOS DATOS DEL LOCAL STORAGE

/* "use strict";

const obtenerLocalStorage =()=>{
    const respuesta = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "No se encontro en el Local Storage"
    console.log(respuesta);
}
obtenerLocalStorage() */

// ELIMINANDO LOS DATOS DEL LOCAL STORAGE

/* "use strict";

const eliminarlocalStorage =()=>{
    !localStorage.key("user") ? console.log("No hay datos a eliminar" ): localStorage.removeItem("user")
}

eliminarlocalStorage() */