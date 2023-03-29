import React from "react";
import {connect} from "react-redux"
import 'bootstrap/dist/css/bootstrap.css';
import deleteTodo from "./deleteAction";
import doneTodo from "./doneAction";

function ListTodo(props){

    function deleteTodo(e){
        const task = e.target.name;
        props.deleteTodo(task);
        e.preventDefault();
    }

    function doneTodo(e){
        const task = e.target.name;
        props.doneTodo(task);
        e.preventDefault();
    }

    let arr = props.list;
    const listItems = arr.map((val,index)=>
    <li key={index} className="list-group-item py-2 m-1" >{val} &ensp;&ensp;&ensp;&ensp; 
    <input type="button" value="Delete" name={val} className="bg-danger text-light p-2 border border-none rounded" onClickCapture={deleteTodo} />
    <input type="button" value="Done" name={val} className=" bg-success text-light p-2 border border-none rounded" onClickCapture={doneTodo}/></li>)

    return <ul className="list-group list-group-flush">{listItems}</ul>
}

function mapStateToProps(state){
    return{
        list: state.list
    }
}

const mapDispatchToProps = {
    deleteTodo,
    doneTodo
}

const el =  connect(mapStateToProps, mapDispatchToProps)(ListTodo)

export default el