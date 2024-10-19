import { useState } from 'react'
import './App.css'
import Phone from './pages/Phone'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Phone />
    </div>
  )
}

export default App
