// server.js

const express = require('express');
const mysql = require('mysql');
const app = express();
// const port = 5000;
const cors = require('cors'); // Importez le package cors
const port = 3307;

// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test',
});

// Connexion à la base de données
connection.connect((err) => {
  if (err) throw err;
  console.log('Connecté à la base de données MySQL');
});

app.use(cors()); //Permet au frontend de faire de appel au backend
app.use(express.json()); //Formatage json

// Route pour créer un nouvel utilisateur
app.post('/api/client', (req, res) => {
    const {nom, prenom, email, tel, entreprise, nb_employes, service, fonction, motif, message} = req.body;
    const sql = 'INSERT INTO client (nom, prenom, email, tel, entreprise, nb_employes, service, fonction, motif, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, [nom, prenom, email, tel, entreprise, nb_employes, service, fonction, motif, message], (err, result) => {
      if (err) {
        console.error('Erreur lors de la création de l\'utilisateur:', err);
        res.status(500).send('Erreur lors de la création de l\'utilisateur');
      } else {
        res.status(201).send('Utilisateur créé avec succès');
      }
    });
  });

// Route pour récupérer tous les utilisateurs
app.get('/api/clients', (req, res) => {
    const sql = 'SELECT * FROM client';
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Erreur lors de la récupération des utilisateurs:', err);
        res.status(500).send('Erreur lors de la récupération des utilisateurs');
      } else {
        res.json(result);
      }
    });
  });

app.listen(port, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${port}`);
});
