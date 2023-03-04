/* Typed */
const typed = new Typed('.typed', {
    strings: ['<i>Desarrollador Front-End<i/>',
            '<i>Autodidata<i/>',
            '<i>UX/UI Designer</i>',
            '<i>Autodidacta<i/>',
            '<i>Front-End Developer<i/>',
            '<i>Freelancer<i/>',
            '<i>Diseñador UX/UI<i/>',
            '<i>Desenvolvedor Front-End<i/>',
            '<i>Autodidact<i/>'],

    // stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

/* Fin Typed */

/*------------------------------------------------------------------------*/

/* Selector de pestañas y scroll activo */

      // Obtener los enlaces del nav y las secciones
        const navLinks = document.querySelectorAll('header div nav a');
        const sections = document.querySelectorAll('.scroll-active');


      // Función para marcar el enlace activo
        const markActive = (link) => {
        navLinks.forEach((link) => {
            link.classList.remove('active');
        });
        link.classList.add('active');
    };

      // Función para manejar el scroll
    const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
            const currentLink = document.querySelector(`header div nav a[href="#${sectionId}"]`);
            markActive(currentLink);
            }
        });
    };
    
        // Añadir el evento scroll a la ventana
        window.addEventListener('scroll', handleScroll);

/* Fin selector de pestañas */

/*------------------------------------------------------------------------*/



/* Pestaña Habilidades */

// Obtener todos los elementos con la clase "tablinks"
const tablinks = document.querySelectorAll(".tablinks");

// Añadir un listener de click a cada botón de pestaña
tablinks.forEach(function(tablink) {
	tablink.addEventListener("click", function() {
    // Obtener el nombre de la pestaña desde el atributo "data-tab" del botón de la pestaña
    const tabName = this.getAttribute("data-tab");

    // Obtener todos los elementos con la clase "tabcontent" y ocultarlos
    const tabcontent = document.querySelectorAll(".tabcontent");
    tabcontent.forEach(function(tab) {
        tab.classList.remove("active");
    });

    // Obtener todos los elementos con la clase "tablinks" y remover la clase "active"
    tablinks.forEach(function(tablink) {
        tablink.classList.remove("active");
    });

    // Mostrar el contenido de la pestaña activa y agregar la clase "active" al botón de la pestaña activa
    document.getElementById(tabName).classList.add("active");
    this.classList.add("active");
    });
});

/*Fin pestaña habilidades */

/*------------------------------------------------------------------------*/

/* Barra de progreso nav */

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY;
    let docHeight = document.body.clientHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = (scrollTop) / (docHeight - winHeight) * 100;
    document.getElementById('myBar').style.width = scrollPercent + '%';
});

/* Fin barra de progreso nav */

/*------------------------------------------------------------------------*/
