import "./Cards.css";

function Card({
  card,
  image,
  title,
  description,
  buttonText,
  buttonColor,
  onClick,
}) {
  return (
    <div className="card">
      <img
        src={image}
        alt={title}
        // className={`card-image ${card === "1" ? "card-image-1" : ""}`}
        className="card-image"
      />

      <p className="card-title">{title}</p>

      <p className="card-description">{description}</p>

      <button
        className="card-button"
        style={{ backgroundColor: buttonColor }}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Card;
