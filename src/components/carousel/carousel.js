import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselData from './carouselData';

function CarouselMain() {

    const multipleCarouselLoader = carouselData.map(
        data => {
            return (
                <Carousel.Item>
                    <p className='text-light mb-1 text-center bg-dark'>
                        <strong>
                            {data.info}
                        </strong>
                    </p>
                    <img className="card-img-top border border-dark img-fluid" src={data.img} alt={`Not loaded ERROR`} />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        }
    )

    return (
        <div className='container-fluid mt-2 '>
            <Carousel>
                {multipleCarouselLoader}
            </Carousel>
        </div>
    )
}

export default CarouselMain;