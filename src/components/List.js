import React,{useState} from 'react';

export default function List({onDelete,text}) {
  const divstyle = {
    border: '2px solid black',
    minHeight: '50px',            // allow height to grow
    width: '700px',
    marginTop: '1rem',
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between', // keeps text left, switch right
    padding: '0 10px',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px'
  };

  const textStyle = {
    alignItems:'center',
    justifyContent:'center',
    flex: 1,                        // take available space
    wordWrap: 'break-word',         // break long words
    overflowWrap: 'break-word',
    marginRight: '10px',
    width:'500px'
  };
 

  const [textmsg,newTextmsg]=useState('Incomplete');
  const switchtask=()=>{
    if(textmsg==='Incomplete'){
      newTextmsg('Completed');
      
      
    }else{
      newTextmsg('Incomplete');
   
    }



}
  return (
    <div className="list-group" style={divstyle}>
      <p style={textStyle}>{text}</p>
             <button type="button"onClick={onDelete} class="btn btn-danger" style={{height:'25px',width:'20px',alignItems:'center',display:'flex',justifyContent:'center',marginRight:'2rem'}}>X</button>

      <div className="form-check form-switch" style={{ display: 'flex', alignItems: 'center' }}>
 
        <input onClick={switchtask} style={{display:'flex',justifyContent:'flex-end',border:'1px solid'}}className="form-check-input fixed-0" type="checkbox" role="switch" id="switchCheckDefault" />
        <label className="form-check-label fixed-0"htmlFor="switchCheckDefault">{textmsg}</label>
      </div>
    </div>

);
}