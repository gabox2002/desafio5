//** EJERCICIO 1: **
let cantidadDeGatos = 10;
let emoji = "😺";

for (let i = 1; i <= cantidadDeGatos; i++) {
  console.log("Gato #" + i + ": " + emoji);

  if (emoji === "😺") {
    emoji = "😸";
  } else if (emoji === "😸") {
    emoji = "😹";
  } else {
    emoji = "😺";
  }
}
