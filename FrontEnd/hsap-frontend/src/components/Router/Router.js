import {
    BrowserRouter, Routes, Route, Navigate
} from 'react-router-dom';
import HomePage from '../../Pages/HomePage';
import AlumnosPage from '../../Pages/AlumnosPage';
import Menu from './Header';
import React from 'react';

export default function Router() {
    return (
      <div>
        <BrowserRouter>
          <Menu />
          <div>
            <Routes>
              <Route path="/home" component={HomePage} />
              <Route path="/alumnos" component={AlumnosPage} />
              
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }