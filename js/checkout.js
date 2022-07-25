swal({
    title: 'Los datos que debe ingresar son:',
    text: 'Nombre: admin1 \n Pin: 1111 \n Correo: admin@1.com',
    icon: 'info',
    button: 'Entendido!'
})

const btnSubmit = document.querySelector('#submit')
let datosDeInput = ""
let users = new Array();

btnSubmit.addEventListener("click", ()=> {
    login();
})

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        fetch("/users.json")
        .then(res => res.json())
        .then(
            response => {
                console.log(response);
                users = response.users;
                console.log('users', users);
            }
        )}
};

document.addEventListener("submit", (e)=> {
    e.preventDefault()
        guardarDatosDeUsr()
            swal({
                title: 'Perfecto!',
                text: 'Los datos han sido enviados exitosamente',
                icon: 'success',
                button: 'Cerrar'
            })
})

function obtenerDatosImput() {
    const nombre = document.querySelector("#inputNombre").value
    const apellido = document.querySelector("#inputApellido").value
    const email = document.querySelector("#inputEmail").value

    return {
        nombre: nombre,
        apellido: apellido,
        email: email
    }
}

function login() {
    const datos = obtenerDatosImput();
    users.forEach(user => {
        console.log(user);
        console.log(datos);

        if (datos.nombre === user.nombre && datos.apellido === user.apellido && datos.email === user.correo){
            location.href = '/index.html';
        } else {
            swal({
                title: 'error!',
                text: 'Datos incorrectos.',
                icon: 'warning',
                button: 'Cerrar'
            })
     
        }
    })}