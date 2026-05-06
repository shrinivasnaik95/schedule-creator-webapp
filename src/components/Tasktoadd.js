import React, { useState } from 'react';
import List from './List';

export default function Tasktoadd() {
  const taskstyle = {
    position: 'absolute',
    marginLeft: '25%',
    marginTop: '10%',
  };

  const inputstyle = {
    height: '70px',
    width: '600px',
    border: '2px solid black',
    flex: 1,                        // take available space
    wordWrap: 'break-word',         // break long words
    overflowWrap: 'break-word',
  };

  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const printing = () => {
    if (text.trim() !== "") {
      setTasks([...tasks, text]);
      setText("");
    }
  };
  const deleteTask=(index)=>{
    setTasks(tasks.filter((_,i)=>i!==index));

  }

  return (
    <>
      <div style={taskstyle}>

        <h1 style={{alignItems:'center',textAlign:'center',marginBottom:'2rem'}}>SCHEDULE CREATOR</h1>
        <input
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e)=>{if(e.key==='Enter'){printing();}}}
          style={inputstyle}
          type="text"
          placeholder="Enter task to be added"
          value={text}
        />
        <button
          onClick={printing}
          style={{
            height: '71px',
            width: '100px',
            border: '2px solid black',
            borderLeft: '0px',
            backgroundColor:'#EDA35A'
          }}
          type="button"
        >
          Add
        </button>

        {tasks.map((item, index) => (
          <List key={index} onDelete={()=>deleteTask(index)}text={item} />
        ))}
      </div>
    </>
  );
}