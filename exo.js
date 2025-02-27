
//1 fonction qui prend deux nombre et retourne la somme

function addition(a, b) {
    return a + b;
}

const a = 5;
const b = 3;
console.log(`1 : Resultat de ${a} + ${b} = ${addition(a, b)}`);

//2 écrivez une fonction qui prend un tableau de nombre et renvoie le plus grand nombre du tableu

function BigNombre(tableau) {
    return Math.max(...tableau);
}

const nombres = [3, 7, 2, 9, 5, 10, 6];
console.log(`2 : Big number est : ${BigNombre(nombres)}`);

//Écrivez une fonction qui prend une chaine de caractère et renvoie une nouvelle chaine de caractère dont toutes les voyelles ont été supprimées

function suprVoyelles(chaine) {
    return chaine.replace(/[aeiouyAEIOUY]/g, '');
}

const texte = "je m'appel yanis";
console.log(`3: texte de base : ${texte}, nouveau texte : ${suprVoyelles(texte)}`);

//Écrivez une fonction qui prend un tableau de chaine de caractère et renvoie un tableau de chaine de caractère trié par ordre alphabetique

function TrierTabAlph(tableau) {
    return tableau.sort();
}

const mots = ["fourchette", "couteau", "cuillère", "verre", "assiette"];
console.log("4 : tableau trie :", TrierTabAlph(mots));

// fonciton qui prend un nombre en argument et retourne celui-ci à l'écris ex: 42 -> quarente deux

async function chargerTroisProduits() {
    try {
      console.log("Début du chargement");
  
      // Séquentiel
      const donnees1 = await chargerDonnees(123);
      console.log("Données 1:", donnees1);
  
      const donnees2 = await chargerDonnees(456);
      console.log("Données 2:", donnees2);
  
      const donnees3 = await chargerDonnees(789);
      console.log("Données 3:", donnees3);
  
      return [donnees1, donnees2, donnees3];
    } catch (erreur) {
      console.error("Erreur de chargement:", erreur.message);
      throw erreur; // Re-throw ou gérer
    } finally {
      console.log("Opération terminée");
    }
  }

  // Fonction asynchrone qui retourne une promesse
function chargerDonnees(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id <= 0) {
          reject(new Error("ID invalide"));
        } else {
          const data = { id, nom: "Produit " + id };
          resolve(data);
        }
      }, 1000);
    });
  }
  
  // Utilisation avec async/await
  async function chargerTroisProduits() {
    try {
      console.log("Début du chargement");
  
      // Séquentiel
      const donnees1 = await chargerDonnees(123);
      console.log("Données 1:", donnees1);
  
      const donnees2 = await chargerDonnees(456);
      console.log("Données 2:", donnees2);
  
      const donnees3 = await chargerDonnees(789);
      console.log("Données 3:", donnees3);
  
      return [donnees1, donnees2, donnees3];
    } catch (erreur) {
      console.error("Erreur de chargement:", erreur.message);
      throw erreur; // Re-throw ou gérer
    } finally {
      console.log("Opération terminée");
    }
  }
  
  // Parallélisation avec async/await
  async function chargerEnParallele() {
    try {
      // Lancement simultané
      const promesse1 = chargerDonnees(111);
      const promesse2 = chargerDonnees(222);
      const promesse3 = chargerDonnees(333);
  
      // Attente des résultats
      const resultats = await Promise.all([promesse1, promesse2, promesse3]);
  
      console.log("Tous les résultats:", resultats);
      return resultats;
    } catch (erreur) {
      console.error("Erreur:", erreur);
    }
  }
  
  // Exécution
  chargerTroisProduits().then((resultats) => {
    console.log("Résultats finaux:", resultats);
  });
  
  chargerEnParallele();
  
