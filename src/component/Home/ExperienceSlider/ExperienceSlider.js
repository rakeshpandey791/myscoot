import React from 'react';
import './ExperienceSlider.scss';
import SliderItem from './SliderItems/SliderItem';


const ExperienceSlider = (props) => {
    let showMoreLength = 0;
    if(props.location || props.time){
        showMoreLength = props.data.length - 3;
    } else {
        showMoreLength = props.data.length - 6;
    }
    return (
        <div className="slider-container">
            <div className="title">
                <h2>{props.title}  
                {
                    props.location ? (<span className="city">{props.location}</span>) : ''
                }
                {
                    props.time ? ( <span className="city">this weekend</span>) : ''
                }
                
                </h2>
            </div>
            <div className="experience-container">
                {
                   props.data.map((item, index) => {
                       if(props.location){
                            return index < 3 ? (<SliderItem data={item} key={index}></SliderItem>) : '';
                       } else if(props.time) {
                        return index < 3 ? (<SliderItem  data={item} key={index}></SliderItem>) : '';
                       } else {
                        return index < 6 ? (<SliderItem  data={item} key={index}></SliderItem>) : '';
                       }
                    })
                }
                
            </div>
            <div className="show-all-link">Show all ({showMoreLength})</div>
        </div>
    );
}

export default ExperienceSlider;