import { SET_ALL_EXPERIENCE_DATA, SET_POPULAR_EXPERIENCE_DATA, SET_RECOMMENDED_EXPERIENCE_DATA } from "src/store/actionConstant";
import data from './../data.json';
export const setExperienceData = () => {
    return (dispatch) => {
       
        const popularExperience = data.popularExperience;
        const recommendedExperience = data.recommendedExperience;
        const allData = popularExperience.concat(recommendedExperience);
        dispatch({type: SET_ALL_EXPERIENCE_DATA, payload: allData});
        dispatch({type: SET_POPULAR_EXPERIENCE_DATA, payload: popularExperience});
        dispatch({type: SET_RECOMMENDED_EXPERIENCE_DATA, payload: recommendedExperience});
    }
}