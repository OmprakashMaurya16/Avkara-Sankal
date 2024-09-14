import React from "react";

export default function Body() {
  return (
    <main>
      <section className="main-content">
        <h2>Welcome to the Central Waste Management and Segregation</h2>

        <div className="content-container">
          <div className="buttons-container">
            <a href="URL_FOR_COMPANIES" className="portal-button">
              Portal for companies to Partner with Avkara Sankal
            </a>
            <a href="URL_FOR_SOCIETY_SECRETARY" className="portal-button">
              Portal for Society Secretary / Household Waste Collection
            </a>
            <a href="URL_FOR_MUNICIPAL_AUTHORITIES" className="portal-button">
              Portal for Municipal Authorities to regulate and oversight Waste
              Management
            </a>
          </div>

          <div className="logo-container">
            <img src="logo.png" alt="Avkara Sankal Logo" />
          </div>
        </div>

        <section className="mission-statement">
          <h2>Your Waste, Our Mission - Cleaner Streets, Greener Planet!</h2>
          <p>
            Our platform is dedicated to handling your waste responsibly,
            ensuring cleaner streets and contributing
          </p>
          <p id="p">to a greener, healthier planet for everyone.</p>
        </section>

        <nav className="button">
          <button className="button1">ABOUT US</button>
          <button className="button1">LEADERBOARD</button>
          <button className="button1">ARTICLES</button>
          <button className="button1">FEEDBACKS</button>
        </nav>
      </section>
    </main>
  );
}
