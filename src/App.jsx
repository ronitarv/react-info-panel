import { useState } from 'react'
import styles from "./css/App.module.css"
import Clock from './components/Clock'
import ElecPriceNow from './components/ElecPriceNow'
import ElecPriceBarChart from './components/ElecPriceBarChart'

function App() {
  const [date, setDate] = useState(new Date())

  setTimeout(() => {
    setDate(new Date())
  }, 1000);

  return (
    <>
    <Clock date={date} />
    <ElecPriceNow />
    <ElecPriceBarChart date={date}/>
    </>
  )
}

export default App
