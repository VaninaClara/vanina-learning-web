import React from "react";
import TechnologyCard from "../components/TechnologyCard";
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
  {tecnologias.map((tec, index) => (
    <TechnologyCard
      key={index}
      nombre={tec.nombre}
      nivel={tec.nivel}
      icono={tec.icono}
    />
  ))}
</div>

</main>

  );
};

export default MisTecnologias;
