import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import AlumnosPage from "../../Pages/AlumnosPage";
import MateriasPage from "../../Pages/MateriasPage";
import LoginPage from "../../Pages/LoginPage";

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
