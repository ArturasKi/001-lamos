import rand from '../Functions/rand';
import randColor from '../Functions/randColor';

function randNumberReducer(state, action) {
    let newState; 
    //
    switch(action.type) {
        case 'add_list':
            newState = [...Array(10)].map((_, i) => ({
                number: (('' + rand(0, 9999)).padStart(4, 0)), 
                color: randColor(),
                show: true,
                row: i
            }));
            // newState = [];
            
            // for (let i = 0; i < 10; i++) {
            //     newState.push(('' + rand(0, 9999)).padStart(4, 0));
            //     console.log(newState);
            // }

            break;

        case 'sort_list':

            newState = [...state].sort((a, b) => {
                if (a.number > b.number) return -1; // kai
                if (a.number < b.number) return 1;
                return 0;
                // arba sort((a, b) => b - a);
            }); 
            console.log(newState);
            break;

        case 'daugiau_list':

            // newState = [...state].filter(e => e.number > 5000);
            newState = state.map(o => o.number > 5000 ? {...o, show: true} : {...o, show: false});
            break;

        case 'maziau_list':
            newState = state.map(o => o.number < 4000 ? {...o, show: true} : {...o, show: false});
            // newState = [...state].filter(e => e.number < 4000);
            break;

        case 'grazinti_list':
            newState = state.map(o => ({...o, show: true}));
            // newState = [...state].filter(e => e.number);
            break;

        case 'def_list':

            newState = [...state].sort((a, b) => a.row - b.row); 
            console.log(newState); // sort keicia originalia reiksme;
            break;

        case 'addkv_list':
            newState = [...state, {
                number: (('' + rand(0, 9999)).padStart(4, 0)), 
                color: '#000',
                show: true,
                row: state.length
            }]
             break;

        case 'removekv':
            newState = state.map(o => o.number === action.payload ? {...o, show: false} : {...o});
            // newState = state.map(o => o.number !== action.payload ? {...o, show: o.show ? true : false} : {...o, show: false});
            // state.filter((o) => o.number !== action.payload);
            break;

            // newState = state.map(o => o.number !== action.payload ? {...o, show: o.show ? true : false} : {...o, show: false});

        case "range":
            console.log('go', action.payload)
            newState = state.map(o => o.number > action.payload ? {...o, show: true} : {...o, show: false} )
            break;
            
        default : newState = [...state];
    }

    //
    return newState;


}

export default randNumberReducer;

// masyvas iš 10 reikšmių map'inam, vietoj brūkšniuko grąžinamas rand skaičius.
// prideti naujus kv juodus;