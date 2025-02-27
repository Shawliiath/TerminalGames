import readline from "readline";
import { fakerFR } from "@faker-js/faker"; // import de faker pour generer des mots fr avec esm
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let essaisRestants = 10;
const SecretWord = fakerFR.word.words(1).toLowerCase(); // utilisation de fakerFR
let lettresTrouvées = Array(SecretWord.length).fill("_");

console.log(`jeu du rebu ; le mot secret est :${SecretWord}`);
console.log(`Mot à deviner : ${lettresTrouvées.join(" ")}`);

function demanderLettre() {
 if (essaisRestants <= 0) {
 console.log(`plus d'essais restants. Le mot était : ${SecretWord}`);
    rl.close();
    return;
  }

rl.question(
`Devinez une lettre (${essaisRestants} essais restants) : `,
(reponse) => {
  const lettreUtilisateur = reponse.toLowerCase();

if (lettreUtilisateur.length !== 1 || !/[a-z]/.test(lettreUtilisateur)) {
 console.log("une lettre a rentré sinon erreur");
 demanderLettre();
    return;
    }

if (SecretWord.includes(lettreUtilisateur)) {
    console.log("bonne lettre");
    for (let i = 0; i < SecretWord.length; i++) {
     if (SecretWord[i] === lettreUtilisateur) {
       lettresTrouvées[i] = lettreUtilisateur;
         }
        }
      } else {
        console.log("mauvaise lettre");
        essaisRestants--;
      }

      console.log(`Mot actuel : ${lettresTrouvées.join(" ")}`);

      if (!lettresTrouvées.includes("_")) {
        console.log("gg bon mot");
        rl.close();
      } else {
        demanderLettre();
    }
    });
}

demanderLettre();