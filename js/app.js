// Eliminar de Local Storage
localStorage.clear();

const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');



// setInterval(function(){
//     elemento = document.querySelector('h1');
//     elemento.textContent = 'moises culo';
// },5000);
//removechild

// hola = document.createElement('a');
// // console.log(hola);

// const primerlista = document.querySelector('.enlace');
// let elemento;


// //obtener clase css
// elemento = primerlista.className
// elemento = primerlista.classList.add('sd');

//eventos

document.querySelector('#submit-buscador').addEventListener('click',function(e){
  e.preventDefault();
  alert('Buscando cursos');
});

const encabezado = document.querySelector('#encabezado');
const enlace = document.querySelector('.enlace');
const boton = document.querySelector('#vaciar-carrito');

// boton.addEventListener('click',obtenerf());
// boton.addEventListener('dblclick',obtenerf());
// boton.addEventListener('mouseenter',obtenerf());
boton.addEventListener('mouseover',obtenerf());
// boton.addEventListener('mousedown',obtenerf());
//eventos en input

function obtenerf(e){
  console.log('hola');
   
}

