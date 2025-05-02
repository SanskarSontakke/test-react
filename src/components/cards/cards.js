import React from 'react';
import CardLoader from "./cardLoader";
import cardsData from "./cardsData";

function Card() {
    const multipleCardLoader = cardsData.map(
        data => {
            return (
                <div className='col-md-2 mb-3'>
                    <CardLoader
                        name={data.name}
                        info={data.info}
                        img={data.img}
                    />
                </div>
            );
        }
    )

    return (
        <div>
            <div className='container-fluid mt-3'>
                <div className='row'>
                    {multipleCardLoader}
                </div>
            </div>

        </div>
    );
}

export default Card;