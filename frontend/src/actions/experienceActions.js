import Axios from "axios";
import { EXPERIENCE_LIST_REQUEST, 
         EXPERIENCE_LIST_FAIL, 
         EXPERIENCE_LIST_SUCCESS,
         EXPERIENCE_DETAILS_REQUEST,
         EXPERIENCE_DETAILS_SUCCESS,
         EXPERIENCE_DETAILS_FAIL,
} from '../constants/experienceConstants';

export const listExperiences = () => async (dispatch) => {
    dispatch({
        type: EXPERIENCE_LIST_REQUEST,
    });
    try {
        const{ data } = await Axios.get('/api/experiences');
        dispatch({type: EXPERIENCE_LIST_SUCCESS, payload: data});
    } catch(error){
        dispatch({type: EXPERIENCE_LIST_FAIL,  payload: error.message});
    }
};

export const detailsExperience = (experienceId) => async (dispatch) => {
    dispatch({type: EXPERIENCE_DETAILS_REQUEST, payload: experienceId});
    try{
        const { data } = await Axios.get(`/api/experiences/${experienceId}`);
        dispatch({type: EXPERIENCE_DETAILS_SUCCESS, payload: data});
    } catch(error){
        dispatch({
            type: EXPERIENCE_DETAILS_FAIL, 
            payload: 
                error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message,
        });
    }
};