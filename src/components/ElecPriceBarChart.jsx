import { useState, UseEffect, useEffect } from "react"
import infoService from "../services/info"
import BarChart from "./BarChart"

const ElecPriceBarChart = ({date}) => {
  const [data, setData] = useState([])


  useEffect(() => {
    infoService.getElecPriceLatest()
    .then(d => {
      setData(d);
    }) 
  },[])

  setTimeout(() => {
    infoService.getElecPriceLatest()
    .then(p => {
      setData(p);
    }) 
  }, 3600*12*1000);
  
  return (
    <div>
      <h1>Elec prices graph</h1>
      <BarChart data={data} width={1500} height={300} date={date}/>
    </div>
  )
}

export default ElecPriceBarChart;