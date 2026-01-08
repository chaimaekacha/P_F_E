import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      
  
      <section className="hero">
        <div className="hero-content">
          
          <h1>Trouvez le bon service, <br />au bon moment</h1>
          <p>Plombiers, Électriciens, Zlayji... Des professionnels vérifiés près de chez vous.</p>

          {/* Barre de recherche  */}
          <div className="search-container">
            <div className="input-group">
*              <input type="text" placeholder="Ville " />
            </div>
            <div className="input-group border-left">
              <select>
                <option>Choisir un service</option>
                <option>Plombier</option>
                <option>Électricien</option>
                <option>Menuisier</option>
                <option>Zlayji</option>
              </select>
              
            </div>
            <button className="btn-search">
               Rechercher
            </button>
          </div>
        </div>
      </section>

      {/* Services populaires  */}
      <section className="services">
        <div className="section-header">
          <div className="icon-box red">
            <i className="fa-solid fa-fire"></i>
          </div>
          <h2>Services populaires</h2>
        </div>
        <p className="subtitle">Les catégories les plus demandées cette semaine</p>

        <div className="service-cards">
        
          <div className="card">
            <div className="card-icon"><i className="fa-solid fa-faucet-drip"></i></div>
            <h3>Plombier</h3>
          </div>
      
          <div className="card">
            <div className="card-icon"><i className="fa-solid fa-bolt"></i></div>
            <h3>Électricien</h3>
          </div>
          <div className="card">
            <div className="card-icon"><i className="fa-solid fa-border-all"></i></div>
            <h3>Zlayji</h3>
          </div>
          <div className="card">
            <div className="card-icon"><i className="fa-solid fa-hammer"></i></div>
            <h3>Menuisier</h3>
          </div>
        </div>
      </section>

      {/*  (Avantages) */}
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
        </div>
        <div className="footer-bottom">
          
          <p>La plateforme numéro 1 au Maroc pour trouver des prestataires de confiance en un clic.</p>
          <div className="footer-col">
            <p>Recevez nos meilleures offres et conseils.</p>
            <div className="newsletter">
              <input type="email" placeholder="Votre email" />
              <button></button>
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