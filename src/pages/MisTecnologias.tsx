import React from "react";
import "./MisTecnologias.css";

const MisTecnologias: React.FC = () => {
  const tecnologias = [
    { nombre: "React", nivel: "Intermedio" },
    { nombre: "Node.js", nivel: "Básico" },
    { nombre: "SQL", nivel: "Básico" },
    { nombre: "Git", nivel: "Intermedio" },
    { nombre: "TypeScript", nivel: "Aprendiendo" },
    { nombre: "Testing", nivel: "Quiero mejorar" },
    { nombre: "Docker", nivel: "Solo nociones" },
  ];

  return (
    <main className="page-container">
  <h1>Mis Tecnologías</h1>
  <div className="card-grid">
    {tecnologias.map((tec, index) => {
      const nivelClase = tec.nivel.toLowerCase().replace(/\s+/g, '-');
      return (
        <div className={`card ${nivelClase}`} key={index}>
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
