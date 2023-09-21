import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className='w-full h-screen text-white flex justify-center' style={{ backgroundColor: color }}>
        <div className=' px-4 py-2 bg-slate-500 fixed bottom-10 rounded-full flex justify-center items-center gap-2'>
          <button className=' bg-red-500 px-4 py-2 rounded-full' onClick={() => {
            setColor("red")
          }}>Red</button>
          <button className=' bg-green-500 px-4 py-2 rounded-full' onClick={() => {
            setColor("green")
          }}>Green</button>
          <button className=' bg-blue-500 px-4 py-2 rounded-full' onClick={() => {
            setColor("blue")
          }}>Blue</button>
          <button className=' bg-white text-black px-4 py-2 rounded-full' onClick={() => {
            setColor("white")
          }}>white</button>
          <button className=' bg-orange-500 px-4 py-2 rounded-full' onClick={() => {
            setColor("orange")
          }}>orange</button>
          <button className=' bg-yellow-500  px-4 py-2 rounded-full' onClick={() => {
            setColor("yellow")
          }}>yellow</button>
          <button className=' bg-cyan-400 px-4 text-black py-2 rounded-full' onClick={() => {
            setColor("cyan")
          }}>cyan</button>
          <button className=' bg-violet-500 px-4 py-2 rounded-full' onClick={() => {
            setColor("violet")
          }}>violet</button>
          <button className=' bg-gray-500 border border-gray-400 px-4 py-2 rounded-full' onClick={() => {
            setColor("gray")
          }}>Gray</button>
        </div>
      </div>
    </>
  )
}

export default App
