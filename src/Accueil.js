import React from "react";

const Accueil = ({
  setAdress,
  setMopass,
  connectAdmin,
  connectUser,
  adress,
  admine,
  agence,
}) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="formF" className="form-label">
          Nom
        </label>
        <input
          className="form-control"
          name="nom"
          type="text"
          value={adress}
          id="formF"
          onChange={(e) => setAdress(e.target.value)}
        />
      </div>
      <br />
      <div className="mb-3">
        <label htmlFor="formFi" className="form-label">
          Mot de pass
        </label>
        <input
          id="formFi"
          className="form-control"
          name="Descrip"
          type="password"
          onChange={(e) => setMopass(e.target.value)}
        />
      </div>
      <button className="btn btn-warning" onClick={() => connectAdmin(admine)}>
        Administrateur
      </button>
      <button
        className="ms-4 btn btn-warning"
        onClick={() => connectUser(agence)}
      >
        Utilisateur
      </button>
    </div>
  );
};

export default Accueil;
