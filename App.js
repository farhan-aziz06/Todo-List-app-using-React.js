import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList'
import "./App.css"

function App() {
  const [listTodo, setlistTodo] = useState([]);
  let addList = (listInput)=>{
    if(listInput!=="")
    setlistTodo([...listTodo, listInput]);
  }
  const deletelistItem =(key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setlistTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
          <TodoInput addList={addList}/>
          <h1 className='app-heading'>TODO</h1>
          <hr />
          {listTodo.map((listItems,i)=>(
              <Todolist key={i} index={i} item={listItems} deleteItem={deletelistItem}/>
          ))}
      </div>
      
    </div>
  )
}

export default App
