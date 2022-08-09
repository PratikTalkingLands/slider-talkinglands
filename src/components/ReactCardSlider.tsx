import React from "react";
import "./Slider.css"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const ReactCardSlider = (props) => {
    /*const slides = [
        {image: "https://picsum.photos/600/400", title: "This is a title", description: "This is a description"},
        {image: "https://picsum.photos/601/400", title: "This is a second title", description: "This is a second description"},
        {image: "https://picsum.photos/602/400", title: "This is a third title", description: "This is a third description"},
        {image: "https://picsum.photos/603/400", title: "This is a fouth title", description: "This is a fouth description"},
        {image: "https://picsum.photos/604/400", title: "This is a fifth title", description: "This is a fifth description"},
        {image: "https://picsum.photos/605/400", title: "This is a sixth title", description: "This is a sixth description"},
        {image: "https://picsum.photos/606/400", title: "This is a seventh title", description: "This is a seventh description"},
        {image: "https://picsum.photos/607/400", title: "This is a eighth title", description: "This is a eighth description"},
    ];*/

    const slideLeft = ()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div id="slider">
                {
                    props.slides.map((slide, index) => {
                        return (
                            <div className="slider-card" key={index} onClick={()=>slide.clickEvent()}>
                                <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`, backgroundSize:'cover'}}></div>
                                <p className="slider-card-title">{slide.title}</p>
                                <p className="slider-card-description">{slide.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
        </div>
    )
}

export default ReactCardSlider;