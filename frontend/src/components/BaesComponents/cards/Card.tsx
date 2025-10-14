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
    <div className={`card cardBaes ${className}`} style={{ width: "auto", marginBottom: "15px" }}>
      <div className="card-body card-bodyBaes text-center">
        {title && <h5 className="card-title card-titleBaes">{title}</h5>}
        {text && <p className="card-text card-textBaes">{text}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;

