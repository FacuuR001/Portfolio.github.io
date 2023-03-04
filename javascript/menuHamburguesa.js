
// /* Menu hamburguesa responsive */

const menuHamburguesa = document.getElementById("bars__menu");
const linea1__bars = document.querySelector(".linea1__bars-menu");
const linea2__bars = document.querySelector(".linea2__bars-menu");
const linea3__bars = document.querySelector(".linea3__bars-menu");
const menuRespinsivo = document.querySelector(".menu-respons");
const contenedorMenuResponsivo = document.querySelector('.contenedor-menu-responsivo');

menuHamburguesa.addEventListener("click", ()=>{
    linea1__bars.classList.toggle("activelinea1__bars-menu");
    linea2__bars.classList.toggle("activelinea2__bars-menu");
    linea3__bars.classList.toggle("activelinea3__bars-menu");

    contenedorMenuResponsivo.classList.toggle('mostrar');
});


/* Fin menu hamburguesa responsive */

/*------------------------------------------------------------------------*/
