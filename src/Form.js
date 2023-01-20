import React from "react";
const Form = ({
  addAgence,
  setNom,
  setDescrip,
  imageData,
  nom,
  Descrip,
  lepass,
  setLepass,
}) => {
  return (
    <form
      onSubmit={(e) => {
        addAgence(e);
      }}
      className="formEL"
    >
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Nom
        </label>
        <input
          className="form-control"
          name="nom"
          type="text"
          value={nom}
          id="formFile"
          onChange={(e) => setNom(e.target.value)}
        />
      </div>
      <br />
      <div className="mb-3">
        <label htmlFor="fo" className="form-label">
          password
        </label>
        <input
          className="form-control"
          name="lepass"
          type="Number"
          value={lepass}
          id="fo"
          onChange={(e) => setLepass(e.target.value)}
        />
      </div>
      <br />
      <div className="mb-3">
        <label htmlFor="formFil" className="form-label">
          Description
        </label>
        <input
          id="formFil"
          className="form-control"
          name="Descrip"
          type="text"
          value={Descrip}
          onChange={(e) => setDescrip(e.target.value)}
        />
      </div>
      <br />
      <div className="mb-3">
        <label htmlFor="formFi" className="form-label">
          image
        </label>
        <input
          id="formFi"
          className="form-control"
          type="file"
          onChange={imageData}
        />
      </div>
      <br />
      <button className="btn btn-success w-100" type="submit">
        Ajouter
      </button>
    </form>
  );
};

export default Form;
