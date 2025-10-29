import { useState, UseEffect, useEffect } from "react"
import infoService from "../services/info"

const ElecPriceNow = () => {
  const [price, setPrice] = useState(0)

  useEffect(() => {
    infoService.getElecPriceNow()
    .then(p => {
      setPrice(p);
    }) 
  },[])

  setTimeout(() => {
    infoService.getElecPriceNow()
    .then(p => {
      setPrice(p);
    }) 
  }, 1000);
  
  return (
    <div>
      <h1>{price}</h1>
    </div>
  )
}

export default ElecPriceNow;