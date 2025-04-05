import { useState } from 'react'
import './App.css'
import SearchFilter from './assets/component/SearchFilter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SearchFilter/>
    </>
    // go to assests and click the component.Finally you got a searchfilter component.
  )
}

export default App
