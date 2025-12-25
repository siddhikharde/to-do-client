import React, { useEffect, useState } from 'react'
import axios from 'axios';



function App() {
  const [todos, setTodos]=useState([]);
  
  const loadTodos=async ()=>{
   console.log("Loading todos...");
   const response=await axios.get("http://localhost:8000/todos");
  
   setTodos(response.data.data);
}
  useEffect(()=>{
    loadTodos();
  },[]);
  return (
    <div className='bg-[#EAE0CF] min-h-[100vh]' >
      <h1  className='text-4xl text-[#213448] font-bold text-center p-[20px]'>ToDo list</h1>
       <div className='flex flex-col justify-center items-center w-full'>
         {
          todos.map((todo, index)=>{
            return(
              <div key={index} className='w-[90%] md:w-[70%] border-1 px-[20px] py-[15px] m-[10px] rounded-2xl text-2xl bg-[#94B4C1]'>
              <h3>{todo}</h3>
            </div>
            )
          })
        }
       </div>
    </div>
  )
}

export default App
