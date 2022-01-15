
const reducer = (state = 0, action) => { 
    // state = 0
    // remove "if else" operator 
    // if (state === undefined) {
    //     return 0;
    // }
    switch (action.type) {
        case 'INC':
            return state + 1
        default:
            return state
    }
}
 
let state = reducer(undefined, {})

state = reducer(state, {type: 'INC'})
console.log(state);

state = reducer(state, {type: 'INC'})
console.log(state);
