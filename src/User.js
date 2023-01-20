import React from "react";
import Elhaji from "./Elhaji";
import Nav from "./Nav";
const User = ({
  toggleUser,
  admin,
  haji,
  sonNom,
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
  lesStats,
}) => {
  return (
    <>
      <Nav
        toggleUser={toggleUser}
        sonNom={sonNom}
        admin={admin}
        lesStats={lesStats}
      />

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Nom</th>
            <th scope="col">Tel</th>
            <th scope="col">Lieu de Provenance</th>
            <th scope="col">Date de Naissance</th>
            <th scope="col">Lieu de Naissance</th>
            <th scope="col">Numero</th>
          </tr>
        </thead>
        <tbody>
          <Elhaji
            haji={haji}
            setUserIn={setUserIn}
            setNompel={setNompel}
            setTel={setTel}
            setProven={setProven}
            setNaiss={setNaiss}
            setLieuNaiss={setLieuNaiss}
            setNumero={setNumero}
            photo={photo}
            nompel={nompel}
            setEdit={setEdit}
            agence={agence}
            setAgence={setAgence}
            setUpdate={setUpdate}
          />
        </tbody>
      </table>
    </>
  );
};

export default User;
