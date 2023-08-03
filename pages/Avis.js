import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Call from "../components/Call";
import Bandeau from "../components/Bandeau";
import Footer from "../components/Footer";
import axios from "axios";
import Article from "../components/Article";
import Mention from "../components/Mention";

const Avis = () => {
  const [blogData, setBlogData] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  const getData = () => {
    axios
      .get("http://localhost:3004/articles")
      .then((res) => setBlogData(res.data));
  };

  useEffect(() => getData(), []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.length < 50) {
      setError(true);
    } else {
      axios.post("http://localhost:3004/articles", {
        author,
        content,
        date: Date.now(),
      });
      setError(false);
      setAuthor("");
      setContent("");
      getData(); //actualise le state de blogData
    }
  };

  return (
    <div className="general">
      <div className="navbar">
        <Logo />
        <Navigation />
      </div>
      <div className="bandeauaccueil">
        <Call />
        <h1>Vos avis et notre actualité</h1>
        <Bandeau />
      </div>

      <div className="blog-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Nom"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
          <textarea
            style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
            placeholder="Message"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
          {error && <p>Veuillez écrire un minimum de 50 caractères</p>}
          <input type="submit" value="Envoyer" />
        </form>
        <ul>
          {blogData
            .sort((a, b) => b.date - a.date)
            .map((article) => (
              <Article key={article.id} article={article} />
            ))}
        </ul>
      </div>

      <div className="footerblog">
        <Footer />
        <Mention />
      </div>
    </div>
  );
};

export default Avis;
