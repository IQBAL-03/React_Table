import { useState } from "react";
import "./App.css";

function Header() {
  return (
    <div className="m7-header">
      <div className="logo-placeholder">M7</div>
      <h1>M7 World Championship</h1>
      <p>Official Team Participants Registry</p>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Cari nama tim atau region..."
        readOnly
      />
    </div>
  );
}

function TeamTable() {
  const staticTeams = [
    { nama: "Fnatic ONIC", region: "Indonesia", stage: "Main Stage" },
    { nama: "Falcons AP.Bren", region: "Philippines", stage: "Main Stage" },
    { nama: "Team Spirit", region: "EECA", stage: "Wildcard" },
  ];

  return (
    <div className="table-wrapper">
      <table className="m7-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Team Name</th>
            <th>Region</th>
            <th>Stage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staticTeams.map((team, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="team-name-cell">{team.nama}</td>
              <td>{team.region}</td>
              <td>
                <span className={`badge ${team.stage === "Wildcard" ? "bg-purple" : "bg-gold"}`}>
                  {team.stage}
                </span>
              </td>
              <td>
                <button className="btn-icon edit">✎</button>
                <button className="btn-icon delete">🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Footer() {
  const tahun = new Date().getFullYear();
  return (
    <footer className="m7-footer">
      <p>© {tahun} Moonton Games - M7 Global Series</p>
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      
      <div className="action-row">
        <SearchBar />
        <button className="btn-m7 btn-primary">
          + Add Team
        </button>
      </div>

      <TeamTable />
      
      <Footer />
    </div>
  );
}

export default App;