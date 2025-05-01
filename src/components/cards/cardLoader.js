import React from 'react';

function CardLoader(props) {
    return (
        <div className="card h-100 d-flex flex-column">
            <div className='card-img-top border border-dark'>
                <img className="card-img-top border border-dark img-fluid1" height={200} width={1920} src={props.img} alt={`Not loaded ERROR`} />
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center text-bold mt-2">{props.name}</h5>
                <hr className="mt-1 mb-2" />
                <h6 className="text-center text-secondary m-1 mw-100 flex-grow-1 mt-1">{props.info}</h6>
                <a href={`tel:${props.contact}`} className="btn btn-primary w-100 mt-auto">Book Now</a>
            </div>
        </div>
    );
}

export default CardLoader;