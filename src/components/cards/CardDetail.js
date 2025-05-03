import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cardsData from './cardsData';

function CardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const card = cardsData.find(card => card.id === parseInt(id));

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={card.img} alt={card.name} className="img-fluid" />
        </div>
        <div className="col-md-6 text-light">
          <h2>{card.name}</h2>
          <p>{card.description}</p>
          <p>Price: {card.price}</p>
          <p>Contact: {card.contact}</p>
          <button onClick={() => navigate('/prices')} className="btn btn-primary">Back to All Cards</button>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;