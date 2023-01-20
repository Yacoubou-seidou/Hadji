import React from "react";

const Elhaji = ({
  haji,
  setUserIn,
  setNompel,
  setTel,
  setProven,
  setNaiss,
  setLieuNaiss,
  setNumero,
  photo,
  nompel,
  setEdit,
  agence,
  setAgence,
  setUpdate,
}) => {
  const deleteHaji = (id, arr) => {
    const copy = [...agence];
    const newArry = arr.peleri.filter((item) => item.Numero !== id);
    const newArr1 = { ...arr, peleri: newArry };
    setUserIn(newArr1);
    const elem = copy.filter((ag) => ag.ID !== newArr1.ID);
    const elem2 = [...elem, newArr1];
    console.log(elem2);
    setAgence(elem2);
    setUpdate(true);
  };
  const editUser = (id) => {
    const copy = [...agence];
    const newArr2 = [...haji.peleri];
    console.log(newArr2);
    newArr2.forEach((item) => {
      if (item.Numero === id) {
        setEdit(true);
        console.log(item);
        photo = item.photo;
        setNompel(item.nom);
        setTel(item.tel);
        setProven(item.lieuPro);
        setNaiss(item.date);
        setLieuNaiss(item.lieuNai);
        setNumero(item.Numero);
        item.nom = nompel;
      }
    });
    const newArry = haji.peleri.filter((item) => item.Numero !== id);
    const newArr1 = { ...haji, peleri: newArry };
    setUserIn(newArr1);
    const elem = copy.filter((ag) => ag.ID !== newArr1.ID);
    const elem2 = [...elem, newArr1];
    console.log(elem2);
    setAgence(elem2);
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
                className="btn btn-info"
                onClick={() => editUser(items.Numero)}
              >
                Modifier
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteHaji(items.Numero, haji)}
              >
                Suprimer
              </button>
            </>
          ) : null}
          {items.Etat === true ? (
            <h5 className="text-success">Accepté</h5>
          ) : null}
          {items.Etat === "Rejeter" ? (
            <>
              <h5 className="text-danger">Rejeter</h5>
              <button
                className="btn btn-info"
                onClick={() => editUser(items.Numero)}
              >
                Modifier
              </button>
            </>
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

export default Elhaji;
