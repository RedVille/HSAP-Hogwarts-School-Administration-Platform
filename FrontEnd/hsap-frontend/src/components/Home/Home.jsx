import React from 'react';
import './Home.css'
import '../../index.css'
import logo from '../../assets/img/Home/logoHowards.png'

export default function Home() {
    return(
        <>
            <div className='papel'>
                <h1 className='titulo-h titulos3'>HOGWARTS</h1>
                <div className='center-content'>
                    <img className='logo-hogwarts' src={logo} />
                </div>
                <p className='texto-general2'>Hogwarts es un colegio para brujas y magos al que se accede tras recibir una invitación que entrega un búho. Hay ciento cuarenta y dos escaleras que se mueven como si tuvieran vida propia. Sus fundadores fueron Godric Gryffindor, Rowena Ravenclaw, Helga Hufflepuff y Salazar Slytherin, en cuyo honor se pusieron nombre a las diferentes casas.</p>
            </div>
        </>
    );
}