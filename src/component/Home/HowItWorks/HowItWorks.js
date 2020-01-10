import React, {Component} from 'react';
import './HowItWorks.scss';

const HowItWorks = (props) => {

    return (
        <div className="hiw-container">
            <div className="title">
                <h1>How it works</h1>
            </div>
            <div></div>
            <div className="hiw-box">
                <i className="material-icons icon">message</i>
                <h3>1. Send Your Interest</h3>
                <p>It's free! Send your interest to the event host before seats for the event sell out.</p>
            </div>
            <div className="hiw-box">
                <i className="material-icons icon">contact_mail</i>
                <h3>2. Get Selected</h3>
                <p>If the accepts your invite, you will recieve an email to purchase your tickets.</p>
            </div>
            <div className="hiw-box">
                <i className="material-icons icon">apartment</i>
                <h3>3. Reserve Your Spot</h3>
                <p>It's free! Send your interest to the event host before seats for the event sell out.</p>
            </div>
            <div></div>
        </div>

    );
}

export default HowItWorks;