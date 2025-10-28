import { useState } from 'react'
import styles from "./css/App.module.css"
import Clock from './components/Clock'
import ElecPriceNow from './components/ElecPriceNow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Clock />
    <ElecPriceNow />
    </>
  )
}

export default App
