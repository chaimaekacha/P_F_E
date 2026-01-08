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
              <input type="text" placeholder="Ville " />
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
          <h2>Services populaires</h2>
        </div>

        <p className="subtitle">Les catégories les plus demandées cette semaine</p>
        <div className="service-cards">
          <div className="card">
            <h3>Plombier</h3>
          </div>
      
          <div className="card">
            <h3>Électricien</h3>
          </div>
          <div className="card">
            <h3>Zlayji</h3>
          </div>
          <div className="card">
            <h3>Menuisier</h3>
          </div>
        </div>
      </section>

      {/*  (Avantages) */}
      <section className="why">
        <div className="section-header">
          <h2>Pourquoi Prom3lem ?</h2>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <div>
              <h4>Prestataires vérifiés</h4>
              <p>Identité et compétences validées.</p>
            </div>
          </div>
          <div className="feature-item">
            <div>
              <h4>Avis clients réels</h4>
              <p>Consultez les notes avant de choisir.</p>
            </div>
          </div>
          <div className="feature-item">
            <div>
              <h4>Rapide & Simple</h4>
              <p>Trouvez un pro en moins de 2 minutes.</p>
            </div>
          </div>
        </div>
        
        <footer className="footer">
          <div className="footer-col">
            <p>Recevez nos meilleures offres et conseils.</p>
         </div>
         <div>
          <input type="email" placeholder="Votre email" />
          <button>Contactez</button>
         </div>
          <div className="footer-bottom">
          <p>&copy; 2024 Prom3lem. Tous droits réservés.</p>
        </div>
         </footer>
      </section>
    </div>
    
  );
}

export default Home;