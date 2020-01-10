import React, {Component} from 'react';
import {connect} from 'react-redux';
import HowItWorks from './HowItWorks/HowItWorks';
import './Home.scss';
import DownloadLink from './DownloadLink/DownloadLink';
import ExperienceSlider from './ExperienceSlider/ExperienceSlider';
import HomeSlider from './HomeSlider/HomeSlider';
import {setExperienceData} from './../../store/action/partyAction';

class Home extends Component {
    componentDidMount(){
        this.props.setExperienceData()
    }

    render() {
        return (
            <div>
                <div className="slider">
                    <HomeSlider data={this.props.allExperience}></HomeSlider>
                </div>
                <HowItWorks></HowItWorks>
                <ExperienceSlider title="Popular Experience in " location="Gurgaon"
                 data={this.props.popularExperience}></ExperienceSlider>
                <ExperienceSlider title="Recommended Experience for " time="this weekend"
                data={this.props.recommendedExperience}></ExperienceSlider>
                <ExperienceSlider title="Experience across India"
                data={this.props.allExperience}></ExperienceSlider>
                <div className="learn-more">
                    <img src={process.env.PUBLIC_URL + '/banner1.jpeg'} className="img"></img>
                    <div className="info">
                        <p>Hosting with myscoot</p>
                        <h3>It pays to make people happy. Become a host and start earning.</h3>
                        <button type="button" className="btn-learnmore">Learn more</button>
                    </div>
                </div>
                <DownloadLink></DownloadLink>
            </div>
        );
    }
}

const dispatchStateToProps = (state) => {
    return {
        allExperience: state.partyReducer.allExperience,
        popularExperience: state.partyReducer.popularExperience,
        recommendedExperience: state.partyReducer.recommendedExperience,
    };
}
const dispatchActionToProps = (dispatch) => {
    return {
        setExperienceData: () => dispatch(setExperienceData())
    };
}

export default connect(dispatchStateToProps, dispatchActionToProps)(Home);