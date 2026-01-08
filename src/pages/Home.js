import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      
      {/* Hero Section (Section Principale) */}
      <section className="hero">
        <div className="hero-content">
          
          <h1>Trouvez le bon service, <br />au bon moment</h1>
          <p>Plombiers, Électriciens, Zlayji... Des professionnels vérifiés près de chez vous.</p>

          {/* Barre de recherche  */}
          <div className="search-container">
            <div className="input-group">
              <i className="fa-solid fa-location-dot icon"></i>
              <input type="text" placeholder="Ville (ex: Casablanca)" />
            </div>
            <div className="input-group border-left">
              <i className="fa-solid fa-wrench icon"></i>
              <select>
                <option>Choisir un service</option>
                <option>Plombier</option>
                <option>Électricien</option>
                <option>Menuisier</option>
                <option>Zlayji</option>
              </select>
              
            </div>
            <button className="btn-search">
              <i className="fa-solid fa-magnifying-glass"></i> Rechercher
            </button>
          </div>
        </div>
      </section>

      {/* Services populaires */}
      <section className="services">
        <div className="section-header">
          <div className="icon-box red">
            <i className="fa-solid fa-fire"></i>
          </div>
          <h2>Services populaires</h2>
        </div>
        <p className="subtitle">Les catégories les plus demandées cette semaine</p>

        <div className="service-cards">
          {/* Carte 1 */}
          <div className="card">
            <div className="card-icon"><i className="fa-solid fa-faucet-drip"></i></div>
            <h3>Plombier</h3>
          </div>
          {/* Carte 2 */}
          <div className="card">
            <div className="card-icon"><i className="fa-solid fa-bolt"></i></div>
            <h3>Électricien</h3>
          </div>
          {/* Carte 3 */}
          <div className="card">
            <div className="card-icon"><i className="fa-solid fa-border-all"></i></div>
            <h3>Zlayji</h3>
          </div>
          {/* Carte 4 */}
          <div className="card">
            <div className="card-icon"><i className="fa-solid fa-hammer"></i></div>
            <h3>Menuisier</h3>
          </div>
        </div>
      </section>

      {/* Pourquoi Prom3lem (Avantages) */}
      <section className="why">
        <div className="section-header">
          <div className="icon-box teal">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <h2>Pourquoi Prom3lem ?</h2>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <i className="fa-solid fa-check-circle feature-icon"></i>
            <div>
              <h4>Prestataires vérifiés</h4>
              <p>Identité et compétences validées.</p>
            </div>
          </div>
          <div className="feature-item">
            <i className="fa-solid fa-star feature-icon"></i>
            <div>
              <h4>Avis clients réels</h4>
              <p>Consultez les notes avant de choisir.</p>
            </div>
          </div>
          <div className="feature-item">
            <i className="fa-solid fa-bolt feature-icon"></i>
            <div>
              <h4>Rapide & Simple</h4>
              <p>Trouvez un pro en moins de 2 minutes.</p>
            </div>
          </div>
        </div>
        <footer className="footer">
        <div className="footer-container">
           {/* ... contenu du footer que je t'ai donné ... */}
        </div>
        <div className="footer-bottom">
          
          <p>La plateforme numéro 1 au Maroc pour trouver des prestataires de confiance en un clic.</p>
          <p>&copy; 2026 Prom3lem. Tous droits réservés.</p>
          <div className="social-links">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            {/* Colonne 3: Support */}
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Aide & FAQ</a></li>
              <li><a href="#">Comment ça marche</a></li>
              <li><a href="#">Devenir prestataire</a></li>
              <li><a href="#">Contactez-nous</a></li>
            </ul>
          </div>

          {/* Colonne 4: Newsletter */}
          <div className="footer-col">
            <h4>Restez informé</h4>
            <p>Recevez nos meilleures offres et conseils.</p>
            <div className="newsletter">
              <input type="email" placeholder="Votre email" />
              <button><i className="fa-solid fa-paper-plane"></i></button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Prom3lem. Tous droits réservés. Fait avec <i className="fa-solid fa-heart"></i> au Maroc.</p>
          
        </div>
      </footer>
      </section>
    </div>
    
  );
}

export default Home;