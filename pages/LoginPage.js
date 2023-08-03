import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      username === "votre_nom_utilisateur" &&
      password === "votre_mot_de_passe"
    ) {
      alert("Connexion réussie !");
    } else {
      alert("Identifiant ou mot de passe incorrect.");
    }
  };

  return (
    <div className="login-page">
      <form className="login" onSubmit={handleSubmit}>        
        <h2>Connexion</h2>
        <div>
          <label>Nom d'utilisateur:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="connexion" type="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
