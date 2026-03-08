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

function TeamTable({ nama, region, stage, idx }) {
  return (
    <tbody>
      <tr>
        <td>{idx + 1}</td>
        <td className="team-name-cell">{nama}</td>
        <td>{region}</td>
        <td>
          <span
            className={`badge ${stage === "Wildcard" ? "bg-purple" : "bg-gold"}`}
          >
            {stage}
          </span>
        </td>
        <td>
          <button className="btn-icon edit">✎</button>
          <button className="btn-icon delete">🗑</button>
        </td>
      </tr>
    </tbody>
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
  const [modal, setShowModal] = useState(false);
  const [staticTeams, setStaticTeams] = useState([
    { nama: "Fnatic ONIC", region: "Indonesia", stage: "Main Stage" },
    { nama: "Falcons AP.Bren", region: "Philippines", stage: "Main Stage" },
    { nama: "Team Spirit", region: "EECA", stage: "Wildcard" },
  ]);
  const [form, setForm] = useState({
    nama: "",
    region: "",
    stage: "",
  });
  console.log(form);
  const OnTambahHandle = (e) => {
    e.preventDefault();
    setStaticTeams([...staticTeams, form]);
    setForm({ nama: "", region: "", stage: "" });
    setShowModal(false);
  };
  return (
    <div className="container">
      <Header />

      <div className="action-row">
        <SearchBar />
        <button
          className="btn-m7 btn-primary"
          onClick={() => setShowModal(true)}
        >
          + Add Team
        </button>
      </div>
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
          {staticTeams.map((value, idx) => (
            <TeamTable
              key={idx}
              idx={idx}
              nama={value.nama}
              region={value.region}
              stage={value.stage}
            />
          ))}
        </table>
      </div>

      {modal && (
        <div className="modal-overlay">
          <div className="m7-modal">
            <h3>Form Tambah Team</h3>
            <form onSubmit={OnTambahHandle}>
              <input
                name="nama"
                value={form.nama}
                placeholder="Masukkan Nama..."
                onChange={(x) => setForm({ ...form, nama: x.target.value })}
              />
              <input
                name="region"
                value={form.region}
                placeholder="Masukkan Region..."
                onChange={(x) => setForm({ ...form, region: x.target.value })}
              />
              <select
                name="stage"
                value={form.stage}
                onChange={(x) => setForm({ ...form, stage: x.target.value })}
              >
                <option value="">Pilih Stage</option>
                <option value="Main Stage">Main Stage</option>
                <option value="Wildcard">Wildcard</option>
              </select>
              <div className="modal-action">
                <button className="btn-m7 btn-primary" type="submit">
                  Simpan
                </button>
                <button
                  className="btn-icon delete"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
