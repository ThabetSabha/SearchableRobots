import {
CHANGE_SEARCH_FIELD,
REQUEST_ROBOTS_PENDING, 
REQUEST_ROBOTS_SUCCESS, 
REQUEST_ROBOTS_FAILED
} from './constants';


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


export const requestRobotsAction = (dispatch) => {
    dispatch({type:REQUEST_ROBOTS_PENDING});            //to dispatch the pending action to the reducer as soon as the action is called which would change the isPending state; 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({type:REQUEST_ROBOTS_SUCCESS , payload:data}))     //to dispatch the RRS with payload data when we get a response
    .catch(err => dispatch({type:REQUEST_ROBOTS_FAILED,payload:err}));    //to catch any errors and dispatch RRF when so;
 }