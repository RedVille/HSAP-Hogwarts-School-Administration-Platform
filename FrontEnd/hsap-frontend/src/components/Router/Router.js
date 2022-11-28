import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import AlumnosPage from "../../Pages/AlumnosPage";
import MateriasPage from "../../Pages/MateriasPage";
import LoginPage from "../../Pages/LoginPage";
import CalificacionesPage from "../../Pages/CalificacionesPage"
import AsignarPage from "../../Pages/AsignarPage";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/alumnos" element={<AlumnosPage />} />
            <Route path="/materias" element={<MateriasPage />} />
            <Route path="/calificaciones/:matricula" element={<CalificacionesPage />} />
            <Route path="/asignar/:matricula/:nombre" element={<AsignarPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
