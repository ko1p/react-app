import {ADD, SUB, ONADDNUMBER, ONADD2} from './actionTypes'

export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function onAddNumber(number) {
    return {
        type: ONADDNUMBER,
        payload: number
    }
}

export function onAdd2(number) {
    return {
        type: ONADD2,
        payload: number
    }
}