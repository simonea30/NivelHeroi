
//let xp = 5000;
let nivel = "";

let heroi = ["Pegasus", "Atena", "Shiryu", "Andromeda", "cisne", "Camaleão", "Hidra", "Nachi"];
let xp = [988, 1543, 4567, 5555, 7688, 8987, 9999, 1000000]

//Estou utilizando um for para pegar as posições dos nomes dos herois
for (var i = 0; i < heroi.length; i++) {
   
if ( xp[i] <= 1000) {
    nivel = "Ferro";
  }
  else if (xp[i] >= 1001 && xp[i] <= 2000) {
    nivel = "Bronze";
  }

  else if (xp[i] >= 2001 && xp[i] <= 5000) {
    nivel = "Prata";
  }

  else if (xp[i] >= 5001 && xp[i] <= 7000) {
    nivel = "Ouro";
  }

  else if (xp[i] >= 7001 && xp[i] <= 8000) {
    nivel = "Platina";
  }

  else if (xp[i] >= 8001 && xp[i] <= 9000) {
    nivel = "Ascendente";
  }

  else if (xp[i] >= 9001 && xp[i] <= 10000) {
    nivel = "Imortal";

  } else {
     nivel = "Radiante";
    }
  console.log(`O Herói de nome ***${heroi[i]}*** está no nível de ***${nivel}***`);

}
  










