import { useState, UseEffect } from 'react'

const Clock = () => {
  const [date, setDate] = useState(new Date())

  setTimeout(() => {
    setDate(new Date())
  }, 1000);

  return (
    <div>
      <h1>{date.getHours()}:{date.getMinutes()}</h1>
    </div>
  )
}

export default Clock;