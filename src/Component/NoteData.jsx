import React from 'react';
import './NoteDataStyle.css'
import { FaTrashAlt } from "react-icons/fa";

const NoteData =(props)=>{

    const handleDeleteDatas = () =>{
        props.deleteSpecific(props.id);

    }
    
    return(
               <div id="CardNameStyle" class="card m-2  col-md-3 border-2x">
                <div class="card-body">
                    <h2 class="card-title">{props.title}</h2>
                    <p class="card-text">{props.description}</p>
                    <button onClick={handleDeleteDatas} className="btn btn-danger float-right btn-sm"><FaTrashAlt/></button>
                </div>
                </div>
    )
}

export default NoteData