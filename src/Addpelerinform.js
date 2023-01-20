import React from "react";

const Addpelerinform = ({
  photoData,
  setNompel,
  setTel,
  setProven,
  setNaiss,
  setLieuNaiss,
  setNumero,
  nompel,
  tel,
  proven,
  naiss,
  lieuNaiss,
  numero,
  addPelerin,
  edit,
}) => {
  return (
    <form
      onSubmit={(e) => {
        addPelerin(e);
      }}
      className="formEL"
    >
      <div className="">
        <label htmlFor="photo" className="form-label">
          Photo
        </label>
        <input
          id="photo"
          className="form-control"
          type="file"
          onChange={photoData}
        />
      </div>
      <br />
      <div className="">
        <label htmlFor="nompel" className="form-label">
          Nom
        </label>
        <input
          className="form-control"
          name="nompel"
          type="text"
          value={nompel}
          id="nompel"
          onChange={(e) => setNompel(e.target.value)}
        />
      </div>
      <br />
      <div className="">
        <label htmlFor="tel" className="form-label">
          Tel
        </label>
        <input
          className="form-control"
          name="tel"
          type="text"
          value={tel}
          id="tel"
          onChange={(e) => setTel(e.target.value)}
        />
      </div>
      <br />
      <div className="">
        <label htmlFor="proven" className="form-label">
          Lieu de Provenance
        </label>
        <input
          className="form-control"
          name="proven"
          type="text"
          value={proven}
          id="proven"
          onChange={(e) => setProven(e.target.value)}
        />
      </div>
      <br />
      <div className="">
        <label htmlFor="naiss" className="form-label">
          Date de Naissance
        </label>
        <input
          id="naiss"
          className="form-control"
          name="naiss"
          type="date"
          value={naiss}
          onChange={(e) => setNaiss(e.target.value)}
        />
      </div>
      <br />
      <div className="">
        <label htmlFor="lieuNaiss" className="form-label">
          Lieu de Naissance
        </label>
        <input
          id="lieuNaiss"
          className="form-control"
          name="lieuNaiss"
          type="text"
          value={lieuNaiss}
          onChange={(e) => setLieuNaiss(e.target.value)}
        />
      </div>
      <br />
      <div className="">
        <label htmlFor="numero" className="form-label">
          Numero
        </label>
        <input
          className="form-control"
          name="numero"
          type="text"
          value={numero}
          id="tel"
          onChange={(e) => setNumero(e.target.value)}
        />
      </div>
      <br />
      <button className="btn btn-success w-100" type="submit">
        {!edit ? "Ajouter" : "Update"}
      </button>
    </form>
  );
};

export default Addpelerinform;
