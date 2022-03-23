// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Prueba equifax </h1>`;

var tamaños = [1, 4, 1, 3, 4, 3, 4];

var m = Math.max.apply(null, tamaños);

function repetidas() {
  var repetidas = 0;
  for (var i = 0; i < tamaños.length; i++) {
    if (tamaños[i] == m) {
      repetidas++;
      //console.log(repetidas);
    }
  }
  return repetidas;
}
console.log('el mayor es', m, 'y las veces que se repite son: ', repetidas());
