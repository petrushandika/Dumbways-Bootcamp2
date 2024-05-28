import "../css/Card.css";

interface CardProps {
  name: string;
  image: string;
  quote: string;
}

export function Card(props: CardProps) {
  const { name, image, quote } = props;

  return (
    <div className="card-container">
      <div className="card-user">
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <div className="card-content">
          <h2>{name}</h2>
          <p>{quote}</p>
        </div>
      </div>
    </div>
  );
}
