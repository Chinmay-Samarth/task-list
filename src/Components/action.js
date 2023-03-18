import React from "react";

function addTodo(todo){
    return{
        type:"ADD_TODO",
        todo: todo
    }
}

export default addTodo