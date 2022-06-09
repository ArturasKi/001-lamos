
function bookReducer(state, action) {
    let newState; 

    switch(action.type) {
        case 'book':
            newState = action.payload.map((b, i) => ({...b, row: i}));
            console.log(newState)
            break;

        case 'sort_abc':
            newState = [...state].sort((a, b) => {
                if(a.title > b.title) return 1;
                if(a.title < b.title) return -1;
                return 0;
            });
            console.log(newState);
            break;

        case 'sort_def':
            newState = [...state].sort((a, b) => a.row - b.row);
            console.log(newState);
            break;
        
            
        default : newState = [...state];
    }
    return newState;

}

export default bookReducer;

//1. Mygtukas filtrui rodyti brangesnes nei 13eur knygas;
//2. Mygtukas filtro reset'ui;
//3. Knygu 'reload' mygtukas (is naujo atsiuncia knygas is serverio); -> useEffect
//4. Salia knygos atspausdinti jos kategorija; https://in3.dev/knygos/types/