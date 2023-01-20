import React from "react";

const Nav = ({ toggleAdmin, admin, toggleUser, sonNom, lesStats }) => {
  return (
    <>
      {admin ? (
        <nav className="navbar bg-warning d-flex justify-content-around">
          <div className="container-fluid bg-warning ">
            <h2 className="navbar-brand">Agences</h2>
            <h3>Admin</h3>
            <button onClick={toggleAdmin} className="ms-4 btn btn-warning deco">
              Deconnecter
            </button>
          </div>
          <div className="d-flex w-50 justify-content-around">
            {" "}
            <h5 className="text-success"> Accepter:{lesStats.accepter}</h5>{" "}
            <h5 className="text-danger"> Rejeter:{lesStats.rejeter}</h5>
            <h5 className="text-info">Attente: {lesStats.Attente}</h5>
          </div>
        </nav>
      ) : (
        <nav className="navbar bg-warning d-flex justify-content-around">
          <div className="container-fluid bg-warning ">
            <h2 className="navbar-brand">{sonNom}</h2>
            <h3>
              User :<span>{sonNom}</span>{" "}
            </h3>
            <button onClick={toggleUser} className="ms-4 btn btn-warning deco">
              Deconnecter
            </button>
          </div>
          <div className="d-flex w-50 justify-content-around">
            {" "}
            <h5 className="text-success"> Accepter:{lesStats.accept}</h5>{" "}
            <h5 className="text-danger"> Rejeter:{lesStats.rejet}</h5>
            <h5 className="text-info">Attente: {lesStats.Attent}</h5>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
