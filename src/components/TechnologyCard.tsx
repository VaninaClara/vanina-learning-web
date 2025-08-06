import React from "react";

interface TechnologyCardProps {
  nombre: string;
  nivel: string;
  icono: React.ReactNode;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ nombre, nivel, icono }) => {
  const nivelClase = nivel.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`card ${nivelClase}`}>
      <div className="icono">{icono}</div>
      <h2>{nombre}</h2>
      <p>Nivel: {nivel}</p>
    </div>
  );
};

export default TechnologyCard;
