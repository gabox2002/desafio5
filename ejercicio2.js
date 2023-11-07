//** EJERCICIO 2: **
let cantidadDeGatos = 5;
let cantidadDePasos = 3;

for (let i = 1; i <= cantidadDeGatos; i++) {
  let gato = "Gato #" + i + ": 🐈 ";
  let pasos = "";
  for (let j = 1; j <= cantidadDePasos; j++) {
    pasos += "🐾";
  }
  console.log(gato + pasos);
}

