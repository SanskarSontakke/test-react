import React from 'react';
import { useNavigate } from 'react-router-dom';

function CardLoader({ id, name, info, img }) {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/card/${id}`);
    };

    return (
        <div className="card h-100 d-flex flex-column">
            <div className='card-img-top border border-dark' style={{height: '200px', overflow: 'hidden'}}>
                <img 
                    className="w-100 h-100" 
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }} 
                    src={img} 
                    alt={name} 
                />
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center text-bold mt-2">{name}</h5>
                <hr className="mt-1 mb-2" />
                <h6 className="text-center text-secondary m-1 mw-100 flex-grow-1 mt-1">{info}</h6>
                <button onClick={handleViewDetails} className="btn btn-primary w-100 mt-auto">View Details</button>
            </div>
        </div>
    );
}

export default CardLoader;