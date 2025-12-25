import React, { use } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const loadTodos=async ()=>{
   console.log("Loading todos...");
   const response=await axios.get("http://localhost:8000/todos");
    console.log(response);
}
function App() {
  useEffect(()=>{
    loadTodos();
  },[]);
  return (
    <div>
      {
        
      }
    </div>
  )
}

export default App
