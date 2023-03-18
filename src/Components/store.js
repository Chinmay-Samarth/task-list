import React from "react";
import {createStore} from "redux"

function reducer(state = {list:['ask']}, action){
    switch(action.type){
        case "ADD_TODO":
            return {...state,
            list:[...state.list, action.todo]}
        default:
            return state
    }
}

const store = createStore(reducer)

export default store