
function bookTypeReducer(state, action) {
    let newState; 

    switch(action.type) {
        case 'book_type':
            newState = action.payload.map(book => ({...book, show: true}));
            console.log(newState)
            break;

        default : newState = [...state];
    }
    return newState;

}

export default bookTypeReducer;

//1. Mygtukas filtrui rodyti brangesnes nei 13eur knygas;
//2. Mygtukas filtro reset'ui;
//3. Knygu 'reload' mygtukas (is naujo atsiuncia knygas is serverio); -> useEffect
//4. Salia knygos atspausdinti jos kategorija; https://in3.dev/knygos/types/