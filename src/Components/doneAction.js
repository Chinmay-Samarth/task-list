import React from "react";

function doneTodo(todo){
    return{
        type:"DONE_TODO",
        todo:todo
    }
}

export default doneTodo