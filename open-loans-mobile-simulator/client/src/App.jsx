import { useState } from 'react'
import './App.css'
import Phone from './pages/Phone'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Phone />
  )
}

export default App
