import { cambiarModo } from "./darkmode.js";

let eliseoB = [
  {
    nombre: "Eliseo Borja",
    edad: 20,
    nivelBackend: 10,
    nivelFrontend: 50,
    descripcion:
      " I am a front end web developer specialized in JavaScript. Plus also know some css front and development with html and WooCommerce. Programming is my passion, that's the reason i am working at the time of my academic career. Aditionally, i like to play pc games and read story-type books in my leisure time which is kinda fun and relaxing ",
    habilidades: ["HTML", "CSS", "JavaScript", "Tailwind"],
    fotoPerfil: "./img/elder-ramosYo.jpeg",
    fotoPerfil1: "./img/eliseo-removebg-preview.png",
    fotoPerfil2: "./img/ElliotyYo.jpeg",
    fotoPerfil3: "./img/fotoEnElHospital.jpeg",
  },
  {
    imgHtml: "./public/icons8-html.svg",
    imgCss: "./public/icons8-css.svg",
    imgJs: "./public/icons8-javascript.svg",
    imgTailwind: "./public/icons8-viento-de-cola.svg",
  },
  {
    imgBootstrap: "./public/icons8-oreja.svg",
    imgAzios: "./public/Azios.svg",
    imgRedux: "./public/icons8-redux.svg",
    imgMateriaulUi: "./public/icons8-material-ui.svg",
    imgFireBase: "./public/icons8-firebase.svg",
    imgWordPress: "./public/icons8-wordpress.svg",
  },
];

let contenedorLenguajes = document.querySelector("#contenedor-Imagenes");

function imagenesHabilidades(contenido) {
  let cajasLenguajes = "";
  let imagenes = eliseoB[1];
  cajasLenguajes += `<div class="bg-[#dfd89b] dark:bg-[#25334d] flex justify-center items-center rounded-lg p-4 aspect-square md:h-full md:w-full">
      <img src="${imagenes.imgHtml}" alt="html" class="w-16 h-16 object-contain md:h-[80%] md:w-[90%] lg:h-[60%]" />
    </div>
    
    <div class="bg-[#dfd89b] dark:bg-[#25334d] flex justify-center items-center rounded-lg p-4 aspect-square md:h-full md:w-full">
      <img src="${imagenes.imgCss}" alt="css" class="w-16 h-16 object-contain md:h-[70%] md:w-[90%] lg:h-[60%]" />
    </div>

    <div class="bg-[#dfd89b] dark:bg-[#25334d] flex justify-center items-center rounded-lg p-4 aspect-square md:h-full md:w-full">
      <img src="${imagenes.imgJs}" alt="javascript" class="w-16 h-16 object-contain md:h-[60%] md:w-[90%] lg:h-[55%]" />
    </div>

    <div class="bg-[#dfd89b] dark:bg-[#25334d] flex justify-center items-center rounded-lg p-4 aspect-square md:h-full md:w-full ">
      <img src="${imagenes.imgTailwind}" alt="tailwind" class="w-16 h-16 object-contain md:h-[70%] md:w-[90%] lg:h-[60%]" />
    </div>
  `;
  contenido.innerHTML = cajasLenguajes;
}

imagenesHabilidades(contenedorLenguajes);

let habilidadesExtra = document.querySelector("#habilidades-Extra");

function imgHabilidadesExtra(contenido) {
  let resultado = "";
  let imagenesExtra = eliseoB[2];
  resultado += `<div class="flex flex-row w-full h-full overflow-hidden lg:pl-12">
  <img
    src="/public/icons8-oreja.svg"
    alt="bootstrap"
    class="w-[20%] lg:w-[15%]"
  />
  <img src="/public/Azios.svg" alt="Azios" class="w-[20%] lg:w-[15%]" />
  <img
    src="/public/icons8-redux.svg"
    alt="redux"
    class="w-[20%] lg:w-[15%]"
  />
  <img
    src="/public/icons8-material-ui.svg"
    alt="material-ui"
    class="w-[20%] lg:w-[15%]"
  />
  <img
    src="/public/icons8-firebase.svg"
    alt="firebase"
    class="w-[20%] lg:w-[15%]"
  />
  <img
    src="/public/icons8-wordpress.svg"
    alt="wordpress"
    class="w-[20%] lg:w-[15%]"
  />
</div>
  `;
  contenido.innerHTML = resultado;
}

imgHabilidadesExtra(habilidadesExtra);

//Mi nombre
let cartaELiseo = document.querySelector("#carta-nombre");

const nombreEliseo = eliseoB[0].nombre;

function ponerNombre(contenido) {
  let guardarTexto = "";

  guardarTexto += `  <p class="text-black dark:text-white">
            I'm
            <span class="text-[#c8df48] dark:text-[#e0ef88]">${nombreEliseo}</span>
          </p>`;
  contenido.innerHTML = guardarTexto;
}

ponerNombre(cartaELiseo);

//Tipo de desarrolador que soy

const tipoDesarrollador = ` <p
            class="h-10 w-35 text-center rounded-md border border-black dark:border-white lg:text-5xl lg:h-[39%] lg:w-55 lg:text-end lg:pr-1 lg:pt-0.5"
          >
            Front End
          </p>
          <p class="h-8 w-35 text-start">Developer</p>`;

let cartaDesarrollador = document.querySelector("#carta-developer");

function parteAbajoDesarrollador(contenido) {
  let guardarTexto = "";
  guardarTexto += `${tipoDesarrollador}`;

  contenido.innerHTML = guardarTexto;
}

parteAbajoDesarrollador(cartaDesarrollador);

const menuHamburguesa = document.querySelector("#menu-hamburguesa");

let btnHamburguesa = document.querySelector("#btn-hamburguesa");

function mostrarOcultarMenu() {
  menuHamburguesa.classList.toggle("hidden");
}

btnHamburguesa.addEventListener("click", mostrarOcultarMenu);
