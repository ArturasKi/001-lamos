import rand from '../Functions/rand';

function numberReducer(state, action) {
    let newState; 
    //
    switch(action.type) {
        case 'go_rand':
            newState = ('' + rand(1, 9999)).padStart(4, '0'); // pridedam 0;
            break;
        case 'go_rand1':
            newState = ('' + action.payload).padStart(4, '0');
            break;
        default : newState = state;
    }

    //
    return newState;


}

export default numberReducer;