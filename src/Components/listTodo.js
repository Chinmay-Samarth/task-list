import React from "react";
import {connect} from "react-redux"
import 'bootstrap/dist/css/bootstrap.css';

function ListTodo(props){
    let arr = props.list;
    const listItems = arr.map((val,index)=>
    <li key={index} className="list-group-item py-2 my-1" >{val}</li>)

    return <ul className="list-group list-group-flush">{listItems}</ul>
}

function mapStateToProps(state){
    return{
        list: state.list
    }
}

const el =  connect(mapStateToProps)(ListTodo)

export default el