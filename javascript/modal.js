const mostrarModal = document.getElementById('show-modal');
const modal = document.getElementById('display-modal');
const ocultarModal = document.getElementById('ocultar-modal');
const ocultarPorFuera = document.getElementById('cerrarModalPorFuera');

mostrarModal.addEventListener("click", ()=>{
    modal.style.display = "block";
});

ocultarModal.addEventListener("click", ()=>{
    modal.style.display = "none";
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});

window.onclick = function(event) {
    if (event.target == ocultarPorFuera) {
    modal.style.display = "none";
    }
}


/* Modal de idiomas */  
const abrirModal = document.querySelector('.abrirModalIdomas');
const modalIdioma = document.getElementById('modal-idiomas');

abrirModal.addEventListener("click", ()=>{
    alternarModal(modalIdioma);
    console.log("holas");
});


function alternarModal(modal) {
    if (modal.style.display === "block") {
    modal.style.display = "none";
    } else {
    modal.style.display = "block";
    }
}

function cerrarModalAlHacerClicFuera(modal) {
    document.addEventListener("click", function(event) {
    if (!abrirModal.contains(event.target)) {
        setTimeout(()=> {
            modalIdioma.style.display = "none", 200
        }, 300);
        }
    });
}
cerrarModalAlHacerClicFuera(modalIdioma);

/*************************************************************/

