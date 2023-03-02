// $(document).ready(function () {
//   $("#header").addClass("animated fadeOut");
// });

// $(document).ready(function () {
//   $("header").css({
//     position: "sticky",
//     top: "0",
//   });
//   $("h2").css({ "text-transform": "uppercase" });
//   $("input").addClass("animated bounce");
//   $("#student-name").prop("disabled", true);
// });
// // $("button").addClass("animated bounce");//permite que un elemento rebote
//     // $(".well").addClass("animated shake");//permite que un elemento se aguite
//     // $("#target3").addClass("animated fadeOut");//permite que un elemento se desvanezca

//     $(document).ready(function(){
//         $('h1').addClass('animated shake')
//         $('.text-subText').addClass('animated fadeOut'))
//         $('#logo').addClass('animated bounce')
//     })
//     //apunta al mismo elemento con múltiples selectores jQuery.
//     //Como remover una clase de un elemento
//     $(document).ready(function(){
//         $('h1').removeClass('text-center')
//     })
//     //Ejemplo de como eliminar una clase de un elemento
//      $(document).ready(function() {
//         $("button").addClass("animated bounce");
//         $(".well").addClass("animated shake");
//         $("#target3").addClass("animated fadeOut");
//         $("button").removeClass("btn-default");

//       });

//     //Como cambiar el css de un elemento
//     $(document).ready(function(){
//         $('#target1').css('color','red')
//     //cambiar el color de fondo con de body
//         $('body').css('background','linear-gradient(30deg,red,blue)')
//     })

//     //Desahilita un elemento usando jQuery
//     $(document).ready(function(){
//     //la función prop permite ajustar las propiedades de un elemento
//         $('#target1').prop('disabled',true)
//     })

//     //función de jQuery que permite remplazar etiquetas en html
//     $(document).ready(function(){
//      $('h1').html()
//     })

//     //función de jQuery que me permite reemplazar texto de una etiqueta de html
//     $(document).ready(funtion(){
//         $('#target4').text('')
//     })

//     //Función de remove() de jQuery que me permite eliminar un elemento de mi html
//     $(ducment).ready(function(){
//         $('#target3').remove()
//     })

//     //Mover elemento con appendTo() en html con jQuery
//     $(document).ready(function(){
// $('#target2').appendTo('#right-well')
// })

// //jQuery (se puede aplicar function chaining)
// //Como clonar un elemento
// $(document).ready(function(){
//   $('#target5').clone().appendTo('#left-well')
// })
// (inherits -> hereda, parent->padre)
// //Como acceder a tu elemento padre de un elemento en html con jQuery
// $(document).ready(function(){
//  $('#target1').parent().css('background-color','blue')
// })
// //Como acceder a lo hijos de un elemento
// $(document).ready(function(){
//   $('#left-well').children().css('color','orange')
// })

// //Como acceder a un hijo específico de un elemento usando jQuery
// $(document).ready(function(){
// 	$('.target:nth-child(2)').addClass('animated bounce')
// })

// //Como seleccionar elementos pares e impares
// //para selecccionar elemento pares podemos agregar el texto dentro de los elementos de la clase que contengan esta clase
// Por ejemplo: .target:odd
// Elementos pares: Ejemplo:: .target:even
// $(document).ready(function(){
//   $('.target:even').addClass('animated shake')//Elem
// })
// //Desvanecer todo el documento body de forma dramatica con jQuery
// $(document).ready(function(){
//   $('body').addClass('animated hinge')
// })

//El parametro rest consiste en enviar un parametro a travez de los parametros, y permite enviar un numero indeterminado de datos
const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(2, 4, 6, 8, 10));
//Como determinar el número mayor de un arreglo con el parametro rest
const listNumber = [2, 0, 24, 1, 10, 8, 74];
const maxNumber = Math.max(...listNumber);
console.log(maxNumber);
//Se puede modificar una variable a travez de un arreglo
const numbers = ["m", "r", "w", "a"];
const list = (...arr) => console.log(...arr);
list(numbers);

//Uso de desatructores con objetos
const person = {
  name: {
    firstName: "Manuel",
    secondName: "Walter",
  },
  lastName: {
    firstLastName: "Navarro",
    secondLastName: "Zeta",
  },
  location: {
    country: "Perú",
    city: "Piura",
  },
};

const {
  name: { firstName: OneName },
} = person;

console.log(OneName);
//Example de freecodecamp
const LOCAL_FORECAST = {
  yesterday: {
    low: 61,
    high: 75,
  },
  today: {
    low: 64,
    high: 77,
  },
  tomorrow: {
    low: 68,
    high: 80,
  },
};
