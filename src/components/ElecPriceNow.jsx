import { useState, UseEffect, useEffect } from "react"
import infoService from "../services/info"
import styles from "../css/ElecPriceNow.module.css"

const ElecPriceNow = () => {
  const [price, setPrice] = useState(0)

  useEffect(() => {
    infoService.getElecPriceNow()
    .then(p => {
      setPrice(p);
    }) 
    const interval = setInterval(() => {
      infoService.getElecPriceNow()
      .then(p => {
        setPrice(p);
      }) 
    },60*1000)
    return () => {
      clearInterval(interval);
    }
  },[])

  return (
    <div style={{backgroundImage: `linear-gradient(to top, rgb(${(price*(255/20))},0,${255-(price*(255/20))}), 
                 rgb(${(price*(255/20))},${255-price*(255/80)},${(255-price*(255/20))}))`}} 
                 className={styles.price} >
      <span style={{fontSize: "10rem"}}>{price}</span><span style={{fontSize: "5rem"}}>snt/kWh</span>
    </div>
  )
}

export default ElecPriceNow;