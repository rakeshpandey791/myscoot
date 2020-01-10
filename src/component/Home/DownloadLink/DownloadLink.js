import React from 'react';
import './DownloadLink.scss';

const DownloadLink = () => {
    return (
        <div className="link-container">
            <div className="store-link">
                <h1>Download our mobile app and never miss out</h1>
                <p>Get the app</p>
                <div className="img-container">
                <img src={process.env.PUBLIC_URL + '/ios.png'} className="img" alt="ios"/>
                <img src={process.env.PUBLIC_URL + '/andriod.jpeg'} className="img" alt="ios"/>
                </div>
                
            </div>
            <div className="app-snapshot">
                <img src={process.env.PUBLIC_URL + '/app-snapshot.png'} className="img" alt="ios"/>
            </div>
        </div>
    );
}

export default DownloadLink;