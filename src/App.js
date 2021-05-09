import Note from './Component/Note'
import NodeData from './Component/NoteData'
import { useState } from 'react';
function App() {
  const [data,setData]=useState([])
  const addNote = (note) =>{
    setData((prev)=>{
      return[...prev,note]
    })
  }
  const Deletefn = (id) =>{
   setData((previous)=>{
     previous.filter((currdata,indx)=>{
       return indx!==id ;
     })
   }) 

  }
  return (
    <div className="container">

      <Note passNote={addNote}/>
     
    {

      data.map((index,i)=>{
        return <NodeData
          key={i}
           id={i}
          title={index.title}
          description={index.description}
          deleteSpecific={Deletefn}
        />
      
    })


    }  
   

      
    </div>
  );
}

export default App;
