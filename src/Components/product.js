import React from "react";
import { connect, Connect } from "react-redux";
import '../App.css'

function Product(props){

    return <div className="m-2 border border-dark rounded w-25 p-2 ">
        <p className="my-2">Completed</p><p className="my-2 text-success ">{props.com}</p>
    </div>
}

function mapStateToProps(state){
    return{
        com: state.com
    }
}

const el = connect(mapStateToProps)(Product)

export default el