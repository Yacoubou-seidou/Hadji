import React, { useState, useEffect } from "react";
import Accueil from "./Accueil";
import Addpelerinform from "./Addpelerinform";
import Form from "./Form";
import Hadji from "./Hadji";
import Lesagence from "./Lesagence";
import Nav from "./Nav";
import User from "./User";
const { v4: uuidv4 } = require("uuid");
const Agences = () => {
  const [agence, setAgence] = useState(() => {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    console.log("load");
    return (
      initialValue || [
        {
          nom: "AL Mec",
          Descrip: "facile",
          image: "⭐️",
          ID: "58415ad0-db4c-4b36-acd5-c82486206984",
          pass: 124,
          peleri: [
            {
              nom: "lucky",
              tel: 20752949,
              lieuPro: "Maradi",
              date: "20/03/1983",
              lieuNai: "Gaya",
              Numero: 180,
              photo: "😎",
              Etat: false,
            },
            {
              nom: "Djo",
              tel: 20752949,
              lieuPro: "Dosso",
              date: "20/03/1983",
              lieuNai: "Konni",
              Numero: 18,
              photo: "😎",
              Etat: false,
            },
          ],
        },
        {
          nom: "Oum",
          Descrip: "mabrour",
          image: "💦",
          ID: "bdd49276-a75a-497f-899e-8724ce384be9",
          pass: 126,
          peleri: [
            {
              nom: "Ali",
              tel: 20752949,
              lieuPro: "Maradi",
              date: "20/03/1983",
              lieuNai: "Gaya",
              Numero: 180,
              photo: "😎",
              Etat: false,
            },
            {
              nom: "Moussa",
              tel: 20752949,
              lieuPro: "Dosso",
              date: "20/03/1983",
              lieuNai: "Konni",
              Numero: 18,
              photo: "😎",
              Etat: false,
            },
          ],
        },
      ]
    );
  });
  const [sonNom, setSonNom] = useState(""); //nom user co
  const [voirpel, setVoirpel] = useState(false); //niveau admin voir les pelerin par agence
  const [admine] = useState([
    {
      nom: "Yacos",
      pass: 1234,
    },
  ]);
  //add pelerins les state
  const [edit, setEdit] = useState(false);
  const [photo, setPhoto] = useState("");
  const [nompel, setNompel] = useState("");
  const [tel, setTel] = useState("");
  const [proven, setProven] = useState("");
  const [naiss, setNaiss] = useState("");
  const [lieuNaiss, setLieuNaiss] = useState("");
  const [numero, setNumero] = useState("");
  //savelocal storage state
  const [update, setUpdate] = useState(false);
  //statistique pour admin
  const [lesStats, setLesStats] = useState({
    accepter: 0,
    rejeter: 0,
    Attente: 0,
  });
  //statistique pour user
  const [statsUser, setStatsUser] = useState({
    accept: 0,
    rejet: 0,
    Attent: 0,
  });
  const [haji, setHaji] = useState([]); //voir les pelerins user
  const [admin, setAdmin] = useState(false); //login en tan tque admin
  const [user, setUser] = useState(false); //login user
  const [adress, setAdress] = useState(""); //nom pour se co
  const [mopass, setMopass] = useState(""); // mdp pour se co
  const [add, setAdd] = useState(false); //etat pour ajouter agence
  const [nom, setNom] = useState(""); // nom agence
  const [Descrip, setDescrip] = useState(""); //description agence
  const [image, setImage] = useState(""); //image
  const [lepass, setLepass] = useState(""); //mdp
  const [userIn, setUserIn] = useState([]); //valider user connecter
  useEffect(() => {
    if (update === true) {
      localStorage.setItem("name", JSON.stringify(agence));
      let stat = {
        accepter: 0,
        rejeter: 0,
        Attente: 0,
      };
      agence.forEach((item) => {
        item.peleri.forEach((p) => {
          if (p.Etat === false) {
            stat.Attente++;
          } else {
            if (p.Etat === true) {
              stat.accepter++;
            } else {
              stat.rejeter++;
            }
          }
        });
      });
      setLesStats(stat);
      if (user === true) {
        let sta = {
          accept: 0,
          rejet: 0,
          Attent: 0,
        };
        userIn.peleri.forEach((p) => {
          if (p.Etat === false) {
            sta.Attent++;
          } else {
            if (p.Etat === true) {
              sta.accept++;
            } else {
              sta.rejet++;
            }
          }
        });
        setStatsUser(sta);
      }
      setUpdate(false);
    }
    console.log("out");
  }, [update, agence, user, userIn.peleri]);
  const addAgence = (e) => {
    //ajouter agence
    e.preventDefault();
    console.log(e.target.name);
    const newArr = [
      ...agence,
      {
        nom: nom,
        Descrip: Descrip,
        image: image,
        ID: uuidv4(),
        pass: lepass,
        peleri: [],
      },
    ];
    setAgence(newArr);
    setUpdate(true);
    toggleAddEl();
  };
  const imageData = (e) => {
    //recuperer le data image
    const file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
      setImage(fileReader.result);
    };
  };

  const toggleAddEl = () => {
    //cacher form add agence
    setAdd(!add);
    setNom("");
    setDescrip("");
    setImage("");
    setLepass("");
  };
  const handleDelete = (dey) => {
    const newArry = agence.filter((item) => item.ID !== dey);
    setAgence(newArry);
    setUpdate(true);
  };

  const connectUser = (arr) => {
    //se co en tant que user
    arr.forEach((item) => {
      if (item.nom === adress && parseInt(item.pass) === parseInt(mopass)) {
        setUserIn(item); //le bon user connecter
        setUser(true);
        setSonNom(item.nom);
        let stat = {
          accepter: 0,
          rejeter: 0,
          Attente: 0,
        };
        agence.forEach((item) => {
          item.peleri.forEach((p) => {
            if (p.Etat === false) {
              stat.Attente++;
            } else {
              if (p.Etat === true) {
                stat.accepter++;
              } else {
                stat.rejeter++;
              }
            }
          });
        });
        setLesStats(stat);
        let sta = {
          accept: 0,
          rejet: 0,
          Attent: 0,
        };
        item.peleri.forEach((p) => {
          if (p.Etat === false) {
            sta.Attent++;
          } else {
            if (p.Etat === true) {
              sta.accept++;
            } else {
              sta.rejet++;
            }
          }
        });
        setStatsUser(sta);
      }
    });
  };
  const toggleAdmin = () => {
    //co admin deco
    setAdmin(!admin);
    setVoirpel(false);
  };
  const voirPelerins = (id) => {
    //voir pelerins Admin quand co
    let pelery;
    agence.forEach((ag) => {
      setVoirpel(false);
      setHaji([]);
      if (ag.ID === id) pelery = ag;
    });
    console.log(pelery);
    setVoirpel(true);
    setHaji(pelery);
  };
  const toggleUser = () => {
    //deco user co
    setUser(!user);
  };
  const connectAdmin = (array) => {
    array.forEach((item) => {
      if (item.nom === adress && parseInt(item.pass) === parseInt(mopass)) {
        console.log("cool");
        setAdmin(true);
        let stat = {
          accepter: 0,
          rejeter: 0,
          Attente: 0,
        };
        agence.forEach((item) => {
          item.peleri.forEach((p) => {
            if (p.Etat === false) {
              stat.Attente++;
            } else {
              if (p.Etat === true) {
                stat.accepter++;
              } else {
                stat.rejeter++;
              }
            }
          });
        });
        setLesStats(stat);
      }
    });
  };
  //photo pelerin
  const photoData = (e) => {
    //recuperer le data image
    const file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
      setPhoto(fileReader.result);
    };
  };
  //add pelerin
  const addPelerin = (e) => {
    if (edit === true) {
      setEdit(false);
    }
    e.preventDefault();
    const array = userIn.peleri;
    const newArray = [
      ...array,
      {
        nom: nompel,
        tel: tel,
        lieuPro: proven,
        date: naiss,
        lieuNai: lieuNaiss,
        Numero: numero,
        photo: photo,
        Etat: false,
      },
    ];
    const lesPel = { ...userIn, peleri: newArray };
    setUserIn(lesPel);
    setNompel("");
    setTel("");
    setProven("");
    setLieuNaiss("");
    setNaiss("");
    setNumero("");
    agence.forEach((ag) => {
      if (ag.ID === lesPel.ID) ag.peleri = lesPel.peleri;
    });
    const derni = agence;
    setAgence(derni);
    setUpdate(true);
  };

  return (
    <div
      className="container-fluid row m-0 p-0"
      style={{
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      {!admin && !user ? (
        <div className="d-flex justify-content-center align-items-center">
          <Accueil
            connectAdmin={connectAdmin}
            connectUser={connectUser}
            setAdress={setAdress}
            setMopass={setMopass}
            adress={adress}
            admine={admine}
            agence={agence}
          />
        </div>
      ) : (
        ""
      )}

      {admin ? (
        <>
          {" "}
          <Nav toggleAdmin={toggleAdmin} admin={admin} lesStats={lesStats} />
          <div className="col-3">
            <button
              onClick={toggleAddEl}
              className="btn btn-warning mb-3 mt-3 carte"
            >
              {!add ? "Ajouter Agences" : "Annuler"}
            </button>
            <Lesagence
              agence={agence}
              voirPelerins={voirPelerins}
              handleDelete={handleDelete}
            />
          </div>
          <div className="col-9 text-start">
            {add ? (
              <Form
                lepass={lepass}
                setLepass={setLepass}
                nom={nom}
                Descrip={Descrip}
                image={image}
                addAgence={addAgence}
                setNom={setNom}
                setDescrip={setDescrip}
                imageData={imageData}
              />
            ) : null}

            {voirpel ? (
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
                  <Hadji
                    haji={haji}
                    agence={agence}
                    setAgence={setAgence}
                    setUpdate={setUpdate}
                  />
                </tbody>
              </table>
            ) : (
              ""
            )}
          </div>
        </>
      ) : null}
      {user ? (
        <>
          <div
            className="container-fluid m-0 col-8 p-0"
            style={{
              height: "100vh",
            }}
          >
            <User
              toggleUser={toggleUser}
              sonNom={sonNom}
              admin={admin}
              haji={userIn}
              setUserIn={setUserIn}
              id={agence.ID}
              setNompel={setNompel}
              setTel={setTel}
              setProven={setProven}
              setNaiss={setNaiss}
              setLieuNaiss={setLieuNaiss}
              setNumero={setNumero}
              photo={photo}
              setEdit={setEdit}
              agence={agence}
              setAgence={setAgence}
              setUpdate={setUpdate}
              lesStats={statsUser}
            />
          </div>
          <div className="col-4 p-0">
            <h2>Salut</h2>
            <Addpelerinform
              photoData={photoData}
              setNompel={setNompel}
              setTel={setTel}
              setProven={setProven}
              setNaiss={setNaiss}
              setLieuNaiss={setLieuNaiss}
              setNumero={setNumero}
              nompel={nompel}
              tel={tel}
              proven={proven}
              naiss={naiss}
              lieuNaiss={lieuNaiss}
              numero={numero}
              addPelerin={addPelerin}
              edit={edit}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Agences;
