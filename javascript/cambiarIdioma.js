function cambiarIdioma(idioma) {
    var elementosTexto = document.querySelectorAll("[data-" + idioma + "]");
    for (var i = 0; i < elementosTexto.length; i++) {
        elementosTexto[i].textContent = elementosTexto[i].getAttribute("data-" + idioma);
    }
    document.documentElement.lang = idioma;
}

var btnEs = document.getElementById("btn-es");
var btnPt = document.getElementById("btn-pt");
var btnEn = document.getElementById("btn-en");

btnEs.addEventListener("click", function() { cambiarIdioma("es"); });
btnPt.addEventListener("click", function() { cambiarIdioma("pt"); });
btnEn.addEventListener("click", function() { cambiarIdioma("en"); });
