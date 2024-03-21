import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div onClick={()=>setCount(count+1)}>
        <h1>halloworld {count}</h1>
      </div>
    </>
  )
}

export default App
