import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-amber-300 p-4'>Welcome to my website</h1>
     <p className='btn btn-error mt-6'>hello</p>
    </>
  )
}

export default App
