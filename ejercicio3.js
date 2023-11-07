//** EJERCICIO 3 **
let cantidadDeGatos = 10;
let cantidadDePasos = 4;

for (let i = 1; i <= cantidadDeGatos; i++) {
  let gato = "Gato #" + i + ": ";
  let pasos = "";

  for (let j = 1; j <= cantidadDePasos; j++) {
    pasos += "🐾";
  }

  if (i % 2 === 0) {
    gato += "🐈‍⬛ ";
  } else {
    gato += "🐈 ";
  }

  console.log(gato + pasos);
}


// otra forma:
// let cantidadDeGatos = 10;
// let cantidadDePasos = 4;

// for (let i = 1; i <= cantidadDeGatos; i++) {
//   for (let j = 1; j <= cantidadDePasos; j++) {
//     let gatoEmoji = (i % 2 === 0) ? "🐈‍⬛" : "🐈";
//     let pasoEmoji = "🐾";
//     console.log("Gato #" + i + ": " + gatoEmoji + " " + pasoEmoji);
//   }
// }