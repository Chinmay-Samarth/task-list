import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import addTodo from "./action";
import { connect } from "react-redux";


function AddTodo(props){
    const [todo, setTodo] = useState("")

    function handleChange(e){
        setTodo(e.target.value)
    }

    function handleSubmit(e){
        if (todo!=""){
            props.addTodo(todo)
            setTodo('');
        }
        e.preventDefault();
    }

    return <form onSubmit={handleSubmit} className="my-3">
        <input type="text" placeholder="name of todo" value={todo} onChange={handleChange} className="form control mx-2 w-25 border border-none rounded py-2 .active"/>
        <input type="submit" value="+ADD" className="btn btn-primary m-2"/>
    </form>
}

const mapDispatchToProps={
    addTodo
}

const el = connect(null, mapDispatchToProps)(AddTodo)

export default el