import { useState, UseEffect } from 'react'

const Clock = ({date}) => {

  return (
    <div>
      <h1>{date.getHours()}:{date.getMinutes()}</h1>
    </div>
  )
}

export default Clock;