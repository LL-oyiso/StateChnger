import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState('red')
  
  return (
    <>
      <div className ="w-full h-screen" style ={{backgroundColor : color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
           <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick ={() => setColor('blue')}>Blue</button>
           <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick={() => setColor('grey')}>Grey</button>
          </div>
        </div>
      
      </div>
    </>
  )
}

export default App
