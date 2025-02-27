const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let essaisRestants = 10;

async function jouer() {
console.log('Bienvenue dans le jeu de devinette !');
  
const nombreSecret = Math.floor(Math.random() * 100) + 1;

demanderNombre(async (nombreUtilisateur) => {
try {
const message = await verifierNombre(nombreUtilisateur, nombreSecret);
console.log(message);
rl.close();
} catch (erreur) {
console.log(erreur);
rl.close();
 }
  });
}

function demanderNombre(callback) {
  rl.question(`Devine un nombre entre 1 et 100 (${essaisRestants} essais restants) : `, (reponse) => {
  callback(parseInt(reponse, 10));
  });
}

function verifierNombre(nombreUtilisateur, nombreSecret) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (nombreUtilisateur === nombreSecret) {
      resolve('GG, bon nombre ');
      } else {
        essaisRestants--;
        
        if (essaisRestants === 0) {
        reject(`plus d'essaies, le nombre était ${nombreSecret} `);
   } else {
    console.log(nombreUtilisateur > nombreSecret ? "Trop haut " : "Trop bas ");
   demanderNombre(async (nombreUtilisateur) => {
       try {
       const message = await verifierNombre(nombreUtilisateur, nombreSecret);
      console.log(message);
      rl.close();
     } catch (erreur) {
         console.log(erreur);
         rl.close();
          }
     });
     }
     }
    }, 500);
  });
}

jouer();