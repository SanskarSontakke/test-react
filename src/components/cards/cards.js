import React from 'react';
import CardLoader from './cardLoader';
import cardsData from './cardsData';

function Cards() {
    return (
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {cardsData.map(card => (
                    <div key={card.id} className="col-md-3 pt-4">
                        <CardLoader {...card} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;