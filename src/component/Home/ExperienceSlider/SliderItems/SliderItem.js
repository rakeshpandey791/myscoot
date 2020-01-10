import React from 'react';
import moment from "moment";
import './SliderItem.scss';

const SliderItem = (props) => {
    const highLights = props.data.highLights.reduce((str, item, index, arr) => {
        return index === arr.length -1 ? str + item : str + item + ' | ';
    }, '');
    return (
        <div className="items">
            <img src={process.env.PUBLIC_URL + '/' + props.data.imgUrl} className="img" alt={props.data.name}></img>
            <div className="details">
                <div>
                    <p>{moment(props.data.createdOn).format('ddd DD MMM')} | {props.data.location}</p>
                    <div className="img-details">
                        <div>
                            <img src={process.env.PUBLIC_URL + '/u1.jpeg'} className="img-icon"></img>
                        </div>
                        <div className="border-bottom">
                            <div><small>Requested by {props.data.requestedBy}</small></div>
                            <div className="name">My Scoot Movie Night</div>
                            <div><small>Highlights {highLights}</small></div>
                        </div>
                    </div>
                    <div className="img-details">
                        <div>
                            <img src={process.env.PUBLIC_URL + '/u2.png'} className="img-icon"></img>
                        </div>
                        <div>
                            <div><small>Requested invite for free</small></div>
                        </div>
                    </div>
                </div>
                <div className="price">{props.data.price}</div>
            </div>
            
        </div>
    );
}

export default SliderItem;