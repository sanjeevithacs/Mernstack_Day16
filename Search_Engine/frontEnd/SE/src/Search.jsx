import React, { useState } from 'react'
import axios from "axios"
import View from './view.jsx'

function Search() {
  

    const [value,setValue] = useState("")
    const[data,setData] = useState([])
    async function handleViews() {
      let res = await axios.get(`http://localhost:3000/api/v1/search?search=${value}`)     // ` ` -template literals
      console.log(res.data);
      
    }
  
  

    function handleClick(e){
      e.preventDefault()
      handleViews()
    }

  return (
    <div>
        <form action="">
            <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={(e)=>handleClick(e)}>submit</button>
        </form>

    {
        data.map((i)=><View title={i.title} description={i.description}/>)
    }
    </div>
  )
}
export default Search