// server.js

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connecté à la base de données MySQL');
});

app.use(cors());
app.use(express.json());

// Route pour récupérer les articles du blog
app.get('/api/articles', (req, res) => {
  const sql = 'SELECT * FROM articles';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Route pour créer un nouvel article
app.post('/api/articles', (req, res) => {
  const { title, content } = req.body;
  const sql = 'INSERT INTO articles (title, content) VALUES (?, ?)';
  connection.query(sql, [title, content], (err, result) => {
    if (err) throw err;
    res.status(201).send('Article créé avec succès');
  });
});

app.listen(port, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${port}`);
});
