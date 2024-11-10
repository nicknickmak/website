import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { projectListReducer, projectDetailsReducer } from './reducers/projectReducers';
import { experienceListReducer, experienceDetailsReducer } from './reducers/experienceReducers';

const initialState = {};
const reducer = combineReducers({
    projectList: projectListReducer,
    projectDetails: projectDetailsReducer,

    experienceList: experienceListReducer,
    experienceDetails: experienceDetailsReducer,

});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;