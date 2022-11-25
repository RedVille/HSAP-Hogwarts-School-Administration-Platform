import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./Login.css";
import { getAllMaestros, login } from "../../firebaseback/firMaestros";
import imageLogin from "../../assets/img/imageLogin.png";
import logoLogin from "../../assets/img/logoLogin.svg";

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  // setters
  function handleCorreoTextChange(event) {
    setCorreo(event.target.value);
  }

  function handleContrasenaTextChange(event) {
    setContrasena(event.target.value);
  }

  function handleSubmit() {
    if (correo !== "" && contrasena !== "") {
      inicioSesion();
    } else {
      swal({
        title: "Campos Vacios",
        text: "Favor de llenar todos los campos",
        buttons: {
          confirm: { text: "Ok", className: "btnOk" },
        },
      });
    }
  }

  //Metodo para iniciar sesión
  function inicioSesion() {
    getAllMaestros().then((value) => {
      if (login(value, correo, contrasena)) {
        //Mandar otra página
        routeChange();
      } else {
        swal({
          title: "Credenciales incorrectas",
          text: "Verifica bien tus credenciales de acceso",
          buttons: {
            confirm: { text: "Ok", className: "btnOk" },
          },
        });
      }
    });
  }

  //Navegación de páginas
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/home`;
    navigate(path);
  };

  return (
    <Row>
        <Col lg={7}>
            <img className="imageLogin" src={imageLogin}></img>
        </Col>
        <Col className="formulario">
            <img className="logo" src={logoLogin} />
            <h1 className="titulo">Inicio de Sesión</h1>
            <input type="email" onChange={handleCorreoTextChange} name="" id="" placeholder="CORREO ELECTRÓNICO"/>
            <input type="password" onChange={handleContrasenaTextChange} name="" id="" placeholder="CONTRASEÑA"/>
            <br />
            <button onClick={handleSubmit} className="btn-entrar">ENTRAR</button>
        </Col>
    </Row>
  );
}
