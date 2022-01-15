import { createStore } from "redux";
import reducer from "./reducer";
import {dec, inc, rnd} from './actions'

const store = createStore(reducer);


document
.getElementById('inc')
.addEventListener('click', () => {
    store.dispatch(inc())
})

document
.getElementById('dec')
.addEventListener('click', () => {
    store.dispatch(dec())
})

document
.getElementById('rnd')
.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 10)
    store.dispatch(rnd(random))
})

store.subscribe(() => {
    document
    .getElementById('counter')
    .innerHTML = store.getState()
})