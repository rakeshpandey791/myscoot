import { SET_ALL_EXPERIENCE_DATA, SET_POPULAR_EXPERIENCE_DATA, SET_RECOMMENDED_EXPERIENCE_DATA } from "src/store/actionConstant";
const initialState = {
    allExperience: [],
    popularExperience: [],
    recommendedExperience: []
};

const partyReducer = (state =  initialState, action) => {
    switch(action.type) {
        case SET_ALL_EXPERIENCE_DATA:
            return {
                ...state,
                allExperience: action.payload
            }
        case SET_POPULAR_EXPERIENCE_DATA: 
            return {
                ...state,
                popularExperience: action.payload
            }
        case SET_RECOMMENDED_EXPERIENCE_DATA: 
            return {
                ...state,
                recommendedExperience: action.payload
            }
        default:
            return state;
    }
}

export default partyReducer;