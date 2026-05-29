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
    imgHtml: "./imagenes/icons8-html.svg",
    imgCss: "./imagenes/icons8-css.svg",
    imgJs: "./imagenes/icons8-javascript.svg",
    imgTailwind: "./imagenes/icons8-viento-de-cola.svg",
  },
];

let contenedorLenguajes = document.querySelector("#contenedor-Imagenes");

function imagenesHabilidades(contenido) {
  let cajasLenguajes = "";
  let imagenes = eliseoB[1];
  cajasLenguajes += `<div class="bg-[#dfd89b] dark:bg-[#25334d] flex justify-center items-center rounded-lg p-4 aspect-square lg:h-full lg:w-full">
      <img src="${imagenes.imgHtml}" alt="html" class="w-16 h-16 object-contain lg:h-full lg:w-[90%]" />
    </div>
    
    <div class="bg-[#dfd89b] dark:bg-[#25334d] flex justify-center items-center rounded-lg p-4 aspect-square lg:h-full lg:w-full">
      <img src="${imagenes.imgCss}" alt="css" class="w-16 h-16 object-contain lg:h-full lg:w-[90%]" />
    </div>

    <div class="bg-[#dfd89b] dark:bg-[#25334d] flex justify-center items-center rounded-lg p-4 aspect-square lg:h-full lg:w-full">
      <img src="${imagenes.imgJs}" alt="javascript" class="w-16 h-16 object-contain lg:h-full lg:w-[90%]" />
    </div>

    <div class="bg-[#dfd89b] dark:bg-[#25334d] flex justify-center items-center rounded-lg p-4 aspect-square lg:h-full lg:w-full ">
      <img src="${imagenes.imgTailwind}" alt="tailwind" class="w-16 h-16 object-contain border border-black lg:h-full lg:w-[90%]" />
    </div>
  `;
  contenido.innerHTML = cajasLenguajes;
}

imagenesHabilidades(contenedorLenguajes);
