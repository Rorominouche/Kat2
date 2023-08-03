import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';//
import "../styles/components/_formTemplate.scss";
import emailjs from "@emailjs/browser";

const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_qr0wy67",
        "template_h6jct8m",
        form.current,
        // process.env.REACT_APP_ID
        "0hOqlYHnd_BxknIwJ"
      )
      .then(
        (result) => {
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [entreprise, setEntreprise] = useState('');
  const [nb_employes, setNbEmployes] = useState('');
  const [service, setService] = useState('');
  const [fonction, setFonction] = useState('');
  const [motif, setMotif] = useState('');
  const [message, setMessage] = useState('');

  const handleCreate = () => {
    axios.post('http://localhost:5000/api/client', { nom, prenom, email, tel, entreprise, nb_employes, service, fonction, motif, message })
      .then(() => {
        setNom('');
        setPrenom('');
        setEmail('');
        setTel('');
        setEntreprise('');
        setNbEmployes('');
        setService('');
        setFonction('');
        setMotif('');
        setMessage('');
        setEmail('');
      })
      .catch((error) => {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
      });
  };

  return (
    <div className="form-container">
      <div id="container">
        <div class="form-box">
          <form
            class="c-form"
            name="c-form"
            action="#"
            method="post"
            ref={form}
            onSubmit={sendEmail}
          >
            <div class="two-columns">
              <fieldset>
                <label class="c-form-label">
                  Nom:<span class="c-form-required"> *</span>
                </label>
                <input
                  class="c-form-input"
                  type="text"
                  value={nom} 
                  onChange={(e) => setNom(e.target.value)}
                  placeholder="Dupont"
                  required
                />
              </fieldset>

              <fieldset>
                <label class="c-form-label">
                  Prenom:<span class="c-form-required"> *</span>
                </label>
                <input
                  class="c-form-input"
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  placeholder="James"
                  required
                />
              </fieldset>

              <fieldset>
                <label class="c-form-label">
                  E-mail<span class="c-form-required"> *</span>
                </label>
                <input
                  class="c-form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="dupont.james@yahoo.fr"
                  required
                />
              </fieldset>

              <fieldset>
                <label class="c-form-label">Numéro de téléphone:</label>
                <input
                  class="c-form-input"
                  type="tel"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  placeholder="Numéro de téléphone"
                />
              </fieldset>

              <fieldset>
                <label class="c-form-label">Nom de l'entreprise:</label>
                <input
                  class="c-form-input"
                  type="text"
                  value={entreprise}
                  onChange={(e) => setEntreprise(e.target.value)}
                  placeholder="Nom de l'entreprise"
                />
              </fieldset>

              <fieldset>
                <label class="c-form-label">
                  Nombre de personnes dans l'entreprise:
                </label>
                <input
                  class="c-form-input"
                  type="text"
                  value={nb_employes}
                  onChange={(e) => setNbEmployes(e.target.value)}
                  placeholder="Nombre de personnes dans l'entreprise"
                />
              </fieldset>

              <fieldset>
                <label class="c-form-label">Service:</label>
                <input
                  class="c-form-input"
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="Service"
                />
              </fieldset>

              <fieldset>
                <label class="c-form-label">Fonction:</label>
                <input
                  class="c-form-input"
                  type="text"
                  value={fonction}
                  onChange={(e) => setFonction(e.target.value)}
                  placeholder="Fonction"
                />
              </fieldset>
            </div>

            <fieldset>
              <label class="c-form-label">Motif de la prise de contact:</label>
              <select class="c-form-input" name="motif"  OnChange={(e) => setMotif(e.target.value)}>
                <option value="liste">Choisir dans la liste : </option>
                <option value="sensibilisation">
                  Sensibilisations handicap au travail
                </option>
                <option value="conseil">Conseil et diagnostic</option>
                <option selected value="coaching">
                  Coaching à la diversité et à l'inclusion
                </option>
                <option value="prestations">Prestations externalisées</option>
              </select>
            </fieldset>

            <fieldset>
              <label class="c-form-label">
                Message:<span class="c-form-required"> *</span>
              </label>
              <textarea
                class="c-form-input"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Saisir ici votre message"
                required
              ></textarea>
            </fieldset>

            <label>
              Calendrier de rendez-vous sur le lien suivant :{" "}
              <a href="https://calendly.com/a-dehan">calendly.com/dsimed...</a>
            </label>

            <label>
              <input
                class="ckeckbox"
                type="checkbox"
                name="Mentions légales"
                id="mentionslegales"
                required
              />
              <a href="https://www.dsi-ap.com/site_dsi/mentions-legales.html">
                Mentions légales<span class="c-form-required"> *</span>
              </a>
            </label>

            <button class="c-form-btn" onClick={handleCreate}>Envoyer</button>
          </form>
        </div>
      </div>
      <div className="form-message"></div>
    </div>
  );
};

export default FormTemplate;
