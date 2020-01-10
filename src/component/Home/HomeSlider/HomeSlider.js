import React from 'react';
import './HomeSlider.scss';

const HomeSlider = (props) => {
    return (
        <div className="home-slider-container">
            <div className="heading">
                <p className="title">Myscoopt Social Experiences</p>
                <h1 className="desc">Where making friends is as easy as showing up</h1>
            </div>
            {
                props.data.map((item, index) => {
                    if(index < 7){
                        const classes = index === 0 ? 'first-item' : '';
                        return (
                            <div className={classes} key={index}>
                                <img src={process.env.PUBLIC_URL + '/' + item.imgUrl} className="img" alt={props.name}></img>
                            </div>
                        )
                    }
                })
            }

        </div>
    );
}

export default HomeSlider;