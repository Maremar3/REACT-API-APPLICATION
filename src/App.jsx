import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import Gallery from './components/Gallery'
//import main from './main'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  //console.log(import.meta.env.VITE_API_Key);
  return (
    <>
MY APP


<Routes>
{/* 
    <Route path='/' element={<Main />} />
    */}
     <Route path='/Gallery' element={<Gallery />} />

      </Routes>
       
    </>
  )
}

export default App
