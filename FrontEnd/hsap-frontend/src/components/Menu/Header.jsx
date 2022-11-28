import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { SidebarData } from "./SideManu";
import "../../index.css";
import "./Header.css";
import menuIcon from "../../assets/img/Menu/menu.svg";
import logoIcon from "../../assets/img/hsapLogo.svg";
import logoutIcon from "../../assets/img/Menu/logout.svg";

function Header() {
  const [paginaActual, setPaginaActual] = useState("Inicio");

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  let nombreMaestro = sessionStorage.getItem("login");

  var showTitle = (event) => setPaginaActual(event.target.innerText);

  //Navegación de páginas
  let navigate = useNavigate();

  const cerrarSesion = () => {
    swal({
      title: "Cerrar Sesión",
      text: "¿Seguro que deseas cerrar sesión?",
      buttons: {
        confirm: { text: "Sí", className: "btnOk" },
        cancel: "No",
      },
    }).then((resultado) => {
      if (resultado) {
        sessionStorage.clear();
        navigate("/");
      }
    });
  };

  return (
    <>
      <div>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <img
                className="icono-sidemenu"
                src={menuIcon}
                onClick={showSidebar}
              />
            </Link>
            <h3 className="titulos center-item">HSAP</h3>
            <Link to="/Home" className="right-item menu-bars">
              <img className="logo-nav" src={logoIcon} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <span className="titulos2">{nombreMaestro}</span>
                <Link to="#" className="menu-bars">
                  <img
                    className="icono-sidemenu-menu icono-sidemenu"
                    src={menuIcon}
                  />
                </Link>
              </li>

              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName} onClick={showTitle}>
                    <Link to={item.path}>
                      <img className={item.cImage} src={item.icon} />
                      <span className="texto-menu">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <li className="nav-text-logout" onClick={cerrarSesion}>
                <Link>
                  <img className="icono-logout" src={logoutIcon} />
                  <span className="texto-menu">Cerrar Sesión</span>
                </Link>
              </li>
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Header;
