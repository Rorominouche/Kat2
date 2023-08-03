// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogContent() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image_url, setImageUrl] = useState('');

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    axios.get('http://localhost:5000/api/articles')
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des articles:', error);
      });
  };

  const handleCreateArticle = () => {
    axios.post('http://localhost:5000/api/articles', { title, content })
      .then(() => {
        setTitle('');
        setContent('');
        fetchArticles();
      })
      .catch((error) => {
        console.error('Erreur lors de la création de l\'article:', error);
      });
  };

  return (
    <div>
      {/* <h1>Mon Blog</h1> */}
      {/* <div>
        <input type="text" placeholder="Titre de l'article" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Contenu de l'article" value={content} onChange={(e) => setContent(e.target.value)} />
        <button onClick={handleCreateArticle}>Publier</button>
      </div> */}
      <div className='blog'>
        {articles.map((article) => (
          <div key={article.id} className='blogContent' >
            <h2>{article.titre}</h2>
            <p>{article.contenu}</p>
            {article.image_url && <img src={`http://localhost:5000/${article.image_url}`} alt={article.title} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogContent;
