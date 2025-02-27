

function addition(a, b) {
    return a + b;
}

const a = 5;
const b = 3;
console.log(`1 : Resultat de ${a} + ${b} = ${addition(a, b)}`);


function BigNombre(tableau) {
    return Math.max(...tableau);
}

const nombres = [3, 7, 2, 9, 5, 10, 6];
console.log(`2 : Big number est : ${BigNombre(nombres)}`);

function suprVoyelles(chaine) {
    return chaine.replace(/[aeiouyAEIOUY]/g, '');
}

const texte = "je m'appel yanis";
console.log(`3: texte de base : ${texte}, nouveau texte : ${suprVoyelles(texte)}`);

function TrierTabAlph(tableau) {
    return tableau.sort();
}

const mots = ["fourchette", "couteau", "cuillère", "verre", "assiette"];
console.log("4 : tableau trie :", TrierTabAlph(mots));

async function chargerTroisProduits() {
    try {
      console.log("Début du chargement");
  
      
      const donnees1 = await chargerDonnees(123);
      console.log("Données 1:", donnees1);
  
      const donnees2 = await chargerDonnees(456);
      console.log("Données 2:", donnees2);
  
      const donnees3 = await chargerDonnees(789);
      console.log("Données 3:", donnees3);
  
      return [donnees1, donnees2, donnees3];
    } catch (erreur) {
      console.error("Erreur de chargement:", erreur.message);
      throw erreur;
    } finally {
      console.log("Opération terminée");
    }
  }

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
  
  async function chargerTroisProduits() {
    try {
      console.log("Début du chargement");
  
      const donnees1 = await chargerDonnees(123);
      console.log("Données 1:", donnees1);
  
      const donnees2 = await chargerDonnees(456);
      console.log("Données 2:", donnees2);
  
      const donnees3 = await chargerDonnees(789);
      console.log("Données 3:", donnees3);
  
      return [donnees1, donnees2, donnees3];
    } catch (erreur) {
      console.error("Erreur de chargement:", erreur.message);
      throw erreur;
    } finally {
      console.log("Opération terminée");
    }
  }
  
  async function chargerEnParallele() {
    try {
      const promesse1 = chargerDonnees(111);
      const promesse2 = chargerDonnees(222);
      const promesse3 = chargerDonnees(333);
  
      
      const resultats = await Promise.all([promesse1, promesse2, promesse3]);
  
      console.log("Tous les résultats:", resultats);
      return resultats;
    } catch (erreur) {
      console.error("Erreur:", erreur);
    }
  }
  
  chargerTroisProduits().then((resultats) => {
    console.log("Résultats finaux:", resultats);
  });
  
  chargerEnParallele();
  
