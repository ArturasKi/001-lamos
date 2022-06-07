import randColor from '../Functions/randColor';

function kvReducer(state, action) {
    let newState; 
    //
    switch(action.type) {
        case 'add_kv':
            newState = [...state, randColor()]
            break;
        default : newState = [...state];
    }

    //
    return newState;


}

export default kvReducer;