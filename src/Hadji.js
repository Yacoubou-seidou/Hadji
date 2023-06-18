import React from "react";

const Hadji = ({ haji, agence, setAgence, setUpdate }) => {
  const acceptReject = (id, arr) => {
    arr.forEach((item) => {
      if (item.Numero === id) {
        item.Etat = true;
      }
    });
    const copy = [...agence];
    const elem = copy.filter((ag) => ag.ID !== haji.ID);
    const elem2 = [...elem, haji];
    setAgence(elem2);
    setUpdate(true);
  };
  const rejectpele = (id, arr) => {
    arr.forEach((item) => {
      if (item.Numero === id) {
        item.Etat = "Rejeter";
      }
    });

    const copy = [...agence];
    const elem = copy.filter((ag) => ag.ID !== haji.ID);
    const elem2 = [...elem, haji];
    setAgence(elem2);
    setUpdate(true);
  };

  return haji.peleri.length > 0 ? (
    haji.peleri.map((items) => (
      <tr key={items.Numero}>
        <td>
          <img
            src={items.photo}
            className="card-img-top rounded-circle w-50"
            alt="..."
          />
        </td>
        <td>{items.nom}</td>
        <td>{items.tel}</td>
        <td>{items.lieuPro}</td>
        <td>{items.date}</td>
        <td>{items.lieuNai}</td>
        <td>{items.Numero}</td>
        <td>
          {items.Etat === false ? (
            <>
              {" "}
              <button
                className="btn btn-danger"
                onClick={() => rejectpele(items.Numero, haji.peleri)}
              >
                Rejeter
              </button>
              <button
                className="btn btn-info"
                onClick={() => acceptReject(items.Numero, haji.peleri)}
              >
                Valider
              </button>
            </>
          ) : null}
          {items.Etat === true ? (
            <h5 className="text-success">Accepté</h5>
          ) : null}
          {items.Etat === "Rejeter" ? (
            <h5 className="text-danger">Rejeter</h5>
          ) : null}
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>No Data</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default Hadji;
