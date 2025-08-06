import React from "react";
import "./MisTecnologias.css";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaJsSquare } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiJest } from "react-icons/si";


const MisTecnologias: React.FC = () => {
  const tecnologias = [
    { nombre: "JavaScript", nivel: "Intermedio", icono: <FaJsSquare /> },
    { nombre: "React", nivel: "Intermedio", icono: <FaReact /> },
    { nombre: "Node.js", nivel: "Básico", icono: <FaNodeJs /> },
    { nombre: "SQL", nivel: "Básico", icono: <FaDatabase /> },
    { nombre: "Git", nivel: "Intermedio", icono: <FaGitAlt /> },
    { nombre: "TypeScript", nivel: "Aprendiendo", icono: <SiTypescript /> },
    { nombre: "Testing", nivel: "Quiero mejorar", icono: <SiJest /> },
    { nombre: "Docker", nivel: "Solo nociones", icono: <SiDocker /> },
  ];

  return (
    <main className="page-container">
  <h1>Mis Tecnologías</h1>
  <div className="card-grid">
  {tecnologias.map((tec, index) => {
    const nivelClase = tec.nivel.toLowerCase().replace(/\s+/g, '-');
    return (
      <div className={`card ${nivelClase}`} key={index}>
        <div className="icono">{tec.icono}</div>
        <h2>{tec.nombre}</h2>
        <p>Nivel: {tec.nivel}</p>
      </div>
    );
  })}
</div>
</main>

  );
};

export default MisTecnologias;
