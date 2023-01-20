import React from "react";
const Lesagence = ({ agence, handleDelete, voirPelerins }) => {
  return agence.length > 0 ? (
    agence.map((item) => (
      <div
        onClick={() => voirPelerins(item.ID)}
        className="card mb-2 m-auto bg-warning carte"
        key={item.ID}
        style={{
          width: "20vw",
          minHeight: "30vh",
        }}
      >
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.nom}</h5>
          <p className="card-text">{item.Descrip}</p>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(item.ID)}
          >
            Suprimer
          </button>
        </div>
      </div>
    ))
  ) : (
    <div>
      <h2>No Data</h2>
    </div>
  );
};

export default Lesagence;
