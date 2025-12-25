import React, { useEffect, useState } from 'react'
import axios from 'axios';



function App() {
  const [todos, setTodos]=useState([]);
  const [newTodo, setnewTodo]=useState("");

  const loadTodos=async ()=>{
   console.log("Loading todos...");
   const response=await axios.get("http://localhost:8000/todos");
  
   setTodos(response.data.data);
}
const addTodo=async()=>{
  const response=await axios.post("http://localhost:8000/todos",{"todoItems":newTodo});
  setnewTodo("");
  loadTodos();
  
}
  useEffect(()=>{
    loadTodos();
  },[]);
  return (
    <div className='bg-[#EAE0CF] min-h-[100vh] ' >
      <h1  className='text-4xl text-[#213448] font-bold text-center p-[20px]'>ToDo list</h1>
       <div className='flex flex-col justify-center items-center w-full h-[400px] scroll-auto overflow-y-scroll '>
         {
          todos.map((todo, index)=>{
            return(
              <div key={index} className='w-[90%] md:w-[70%] border-1 px-[20px] py-[15px] m-[10px] rounded-2xl text-2xl bg-[#94B4C1]'>
              <p>{todo}</p>
            </div>
            )
          })
        }
        
       </div>
        <div className='w-[100%] bg-[#EAE0CF] fixed bottom-0 right-0 left-0 flex justify-center items-center gap-2'>
        <input type="text" placeholder='Add task' value={newTodo} onChange={(e)=>{
          setnewTodo(e.target.value);
        }} 
        className='m-[20px] p-[10px] outline-none rounded-lg border-1 w-[60%] border-[#213448]' />
        <button className='border rounded-2xl p-[10px] text-[#213448] font-bold' onClick={addTodo}>Add TODO</button>
        </div> 

     
    </div>
    
  )
}

export default App
