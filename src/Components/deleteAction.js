import React from "react";

function deleteTodo(todo){
    return{
        type:"DEL_TODO",
        todo:todo
    }
}

export default deleteTodo