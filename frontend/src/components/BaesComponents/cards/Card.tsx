// src/components/Card.jsx

import './cards.css'

interface CardProps {
  title?: string; // El signo '?' indica que la prop es opcional
  text?: string;
  children?: React.ReactNode; // Tipo estándar para el contenido hijo en React
  className?: string;
}

const Card = ({ title, text, children, className = "" }: CardProps) => {
  return (
    <div className={`baes-card ${className}`} style={{ width: "auto", marginBottom: "15px" }}>
      <div className="baes-card-body">
        {title && <h5 className="baes-card-title">{title}</h5>}
        {text && <p className="baes-card-text">{text}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;

