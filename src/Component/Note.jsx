import React, { useState } from 'react'
import './NoteStyle.css'
import { BsFillPlusCircleFill } from "react-icons/bs";

const Note =(props)=>{
    const [DisplayItem,SetDisplayItem]=useState(false)
    const [TodoItem,SetTodoItem]=useState([
        {
            title:"",
            description:""
        }
    ])
    const handleTodo=(e)=>{
        const {name,value}=e.target;
        SetTodoItem((initialValue)=>{
            return{
                ...initialValue,
                [name]:value,
            }
        })
    }
    const HandleEvent = () =>{
        props.passNote(TodoItem);
        SetTodoItem(
            {
                title:"",
                description:""
            }
          
        )
    }
    return(
        <>
        <card id="cardStyle" >       
     <div className="col-md-6 mt-2">
       <input type="text" onClick={()=>{SetDisplayItem(true)}} onChange={handleTodo} value={TodoItem.title} name="title"  className="form-control " id="todotitle"  aria-describedby="emailHelp" placeholder="Enter Todo Title"/>
       </div>
       { DisplayItem ?
        <div className="col-md-6 mt-1">
        <input   className="form-control " value={TodoItem.description} onChange={handleTodo} name="description" id="tododescription"  aria-describedby="emailHelp" placeholder="Enter Todo description"/>
        <button type="submit" onClick={HandleEvent} id="submitBtn" className="btn btn-circle btn-lg btn-primary"><BsFillPlusCircleFill/></button>
        </div>
        :null

       }
      
       </card>
      </>
    )

}
export default Note