import React, { useState} from 'react';
import { SliderData } from './slider_data';

const Slide = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    if(!Array.isArray(slides) || length <= 0){
        return null;
    }

    const nextSlide = () => {
        setCurrent(current === length-1? 0: current+1)
    };

    const prevSlide = () => {
        setCurrent(current === 0? length-1: current-1)
    };

    return (
        <section className = "carousel"> 
            <a className="left-arrow" onClick = {prevSlide}>&#10094;</a>
            
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current?'slide active' : 'slide'}
                        key={index}>
                    
                        {index === current && (
                            <img src = {slide.image} alt="image" className="image"/>
                        )}
                    </div>
                )
            })}
            <a className="right-arrow" onClick = {nextSlide}>&#10095;</a>
        </section>
    );
};

export default Slide;

