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
    const interval = setInterval(() => {
      infoService.getElecPriceLatest()
      .then(d => {
        setData(d);
      }) 
    },3600*60*1000)
    return () => {
      clearInterval(interval);
    }
  },[])

  return (
    <div id="ElecPricesChartContainer" style={{width: "100%", height: "100%"}}>
      <BarChart data={data} date={date}/>
    </div>
  )
}

export default ElecPriceBarChart;