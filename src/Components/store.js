import React from "react";
import {createStore} from "redux"


//!Creating a store
//?takes action and add the required output
function reducer(state = {list:['ask'], com:0}, action){
    switch(action.type){
        case "ADD_TODO":
            return {...state,
            list:[...state.list, action.todo]}
        case "DEL_TODO":
            const ind = state.list.indexOf(action.todo)
            console.log(ind)
            state.list.splice(ind, 1,)
            return {...state,
            list:[...state.list]}
        default:
            return state
    }
}

const store = createStore(reducer)

export default store