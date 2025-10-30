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
    <div>
      <div className={styles.TopInfo}>
        <Clock date={date} />
        <ElecPriceNow />
      </div>
      <div className={styles.Chart}><ElecPriceBarChart date={date}/></div>
    </div>
  )
}

export default App
