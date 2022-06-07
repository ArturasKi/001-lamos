function colorReducer(state, action) {
    let newState; 
    //
    switch(action.type) {
        case 'go_pink':
            newState = 'pink';
            break;
        case 'go_yellow':
            newState = 'yellow';
            break;
        case 'go_change':
            newState = state === 'yellow' ? 'pink' : 'yellow';
            break;
        case 'change_background':
            newState = action.payload;
            break;
        case 'change_text':
            newState = action.payload;
            break;
        default : newState = state;
    }

    //
    return newState;


}

export default colorReducer;