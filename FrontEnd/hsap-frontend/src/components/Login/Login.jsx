import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Login.css";
import imageLogin from "../../assets/img/imageLogin.png";
import logoLogin from "../../assets/img/logoLogin.svg";

export default function Login() {
    return (
        <Row>
            <Col lg={7}>
                <img className="imageLogin" src={imageLogin}></img>
            </Col>
            <Col className="formulario">
                <img className="logo" src={logoLogin} />
                <h1 className="titulo">Inicio de Sesión</h1>
                <input type="email" name="" id="" placeholder="CORREO ELECTRÓNICO" required/>
                <input type="password" name="" id="" placeholder="CONTRASEÑA" required/>
                <br />
                <button className="btn-entrar">ENTRAR</button>
            </Col>
        </Row>
    );
}