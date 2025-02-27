 
console.log("Hello world");

console.log(__filename);
console.log(__dirname); 

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Serveur en écoute sur http://127.0.0.1:3000/');
});

const fs = require('fs');

try {
  const data = fs.readFileSync('fichier.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Erreur de lecture:', err);
}

fs.readFile('fichier.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur de lecture:', err);
    return;
  }
  console.log(data);
});

fs.promises.readFile('fichier.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error('Erreur:', err));

async function lireFichier() {
  try {
    const data = await fs.promises.readFile('fichier.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Erreur:', err);
  }
}

lireFichier();

