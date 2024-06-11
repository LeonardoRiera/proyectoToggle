const fondo = document.getElementById('bodyNoche');
const contenedorDiv = document.getElementById('contenedor');
const tecla = document.getElementById('boton');






function cambiar() {


    tecla.classList.toggle('botonDia');
    contenedorDiv.classList.toggle('contenedorDia');
    fondo.classList.toggle('bodyDia');
    
    
}

tecla.addEventListener('click', cambiar);

