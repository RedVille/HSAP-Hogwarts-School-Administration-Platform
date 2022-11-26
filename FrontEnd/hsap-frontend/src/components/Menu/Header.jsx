import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideManu';
import './Header.css';
import '../../index.css'
import { IconContext } from 'react-icons';
import menuIcon from '../../assets/img/Menu/menu.svg'
import logoIcon from '../../assets/img/hsapLogo.svg'
import alumnoIcon from '../../assets/img/Menu/menuAlumnos.svg'
import materiaIcon from '../../assets/img/Menu/menuMaterias.svg'
import logoutIcon from '../../assets/img/Menu/logout.svg'

function Header() {

  const [paginaActual, setPaginaActual] = useState("Inicio")

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  let nombreMaestro = sessionStorage.getItem("login")
  
  var showTitle = (event) => setPaginaActual(event.target.innerText);

  return (
    <>
      <div>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <img className='icono-sidemenu' src={menuIcon} onClick={showSidebar} />
            </Link>
            <h3 className='titulos center-item'>{paginaActual}</h3>
            <Link to='/Home' className='right-item menu-bars'>
              <img className='logo-nav' src={logoIcon} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <span className='titulos2'>{nombreMaestro}</span>
                <Link to='#' className='menu-bars'>
                  <img className='icono-sidemenu-menu icono-sidemenu' src={menuIcon} />
                </Link>
              </li>

              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName} onClick={showTitle}>
                    <Link to={item.path}>
                      <img className={item.cImage} src={item.icon} />
                      <span className='texto-menu'>{item.title}</span>
                    </Link>
                  </li>
                );
              })}

            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Header;