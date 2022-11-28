import React from 'react';
import { useParams } from 'react-router-dom';
import AsignarMateria from '../components/Materias/AsignarMateria';
import Menu from '../components/Menu'

export default function AsignarPage() {
    return(
        <div>    
            <Menu />
            <AsignarMateria />
        </div>
    );
}