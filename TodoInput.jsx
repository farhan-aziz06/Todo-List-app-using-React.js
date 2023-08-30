import React, {useState} from 'react'


function TodoInput(props) {
  const handelEnterPreess = (e)=>{
    if(e.keyCode === 13){
      props.addList(listInput);
      setListInput("");
    }
  }
const [listInput, setListInput] = useState("");
  return (
    <div className="input-container">
      <input
        type="text"
        className='input-box-todo'
        placeholder='Enter Your Tasks Here...'
        value={listInput}
        onChange={e=>{
            setListInput(e.target.value);
        }}
        onKeyDown={handelEnterPreess}
       />
       <button className='add-btn' onClick={()=>{
        props.addList(listInput);
        setListInput("");
       }}>+</button>
    </div>
  )
}

export default TodoInput
