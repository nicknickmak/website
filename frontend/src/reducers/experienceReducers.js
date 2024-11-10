import { EXPERIENCE_LIST_FAIL, EXPERIENCE_LIST_REQUEST, EXPERIENCE_LIST_SUCCESS,EXPERIENCE_DETAILS_REQUEST, EXPERIENCE_DETAILS_SUCCESS, EXPERIENCE_DETAILS_FAIL} from "../constants/experienceConstants";

export const experienceListReducer = (state = { loading: true, experiences: [] }, action) => {
    switch(action.type){
        case EXPERIENCE_LIST_REQUEST:
            return{loading: true};
        case EXPERIENCE_LIST_SUCCESS:
            return {loading: false, experiences: action.payload};
        case EXPERIENCE_LIST_FAIL:
            return { loading: false, error: action.payload};
        default:
            return state;
    }
}

export const experienceDetailsReducer = (
    state= { experience:{}, loading: true}, 
    action
) =>{
    switch (action.type) {
        case EXPERIENCE_DETAILS_REQUEST:
            return { loading: true};
        case EXPERIENCE_DETAILS_SUCCESS:
            return {loading: false, experience: action.payload};
        case EXPERIENCE_DETAILS_FAIL:
            return { loading: false, error: action.payload};
        default:
            return state;
    }

}