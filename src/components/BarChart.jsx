import * as d3 from 'd3';
import { useState, useEffect, useRef } from 'react';
import styles from "../css/BarChart.module.css"

const BarChart = ({ data, date }) => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  
  useEffect(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.getBoundingClientRect().width;
    const h = containerRef.current.getBoundingClientRect().height;
    setWidth(w);
    setHeight(h);
  },[containerRef.current])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("rezize", handleResize)
  },[])

  const handleResize = () => {
    if (!containerRef.current) return;
    const w = containerRef.current.getBoundingClientRect().width;
    const h = containerRef.current.getBoundingClientRect().height;
    setWidth(w);
    setHeight(h);
  }

  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const barWidth = chartWidth/data.length;
  const x = d3
    .scaleTime()
    .domain(d3.extent(data, d => new Date(d.startDate)))
    .range([0, chartWidth])
  const y = d3.scaleLinear().domain([0, d3.max(data, (d) => d.value)]).range([chartHeight, 0]);

  const xAxis = d3.axisBottom(x)
  .ticks(20)
  .tickFormat(d3.timeFormat("%H:%M"))


  d3.select(this).style("font-size","100px")
  const yAxis = d3.axisLeft(y)

  const yGrid = d3.axisLeft(y)
  .tickSize(-chartWidth)
  .tickFormat("")
  .tickValues(y.ticks().slice(0,-1))

  return (
    <div ref={containerRef} style={{width: "100%", height: "100%"}}>
      <svg className={styles.BarChart} width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {data.map((d,i) => (
            <rect
              key={d.key}
              x={x(new Date(d.startDate))}
              y={y(d.value)}
              width={barWidth}
              height={chartHeight - y(d.value)}
              fill={(date > new Date(d.startDate) && date < new Date(d.endDate)) ? 
                d3.rgb((d.value*(255/20)), Math.max(0,100-d.value*(255/100)), (255-d.value*(255/20))) : d3.rgb(80, 80, 80)}
              className={(date > new Date(d.startDate) && date < new Date(d.endDate)) ? styles.CurrentBar : styles.Bar}
            />
          ))}
          <g
            className={styles.xAxis}
            transform={`translate(0,${chartHeight})`}
            ref={(node) => d3.select(node).call(xAxis)}
            style={{fontSize: "2.2rem", strokeWidth: "1px", strokeOpacity: 0.2}}
          />
          <g className={styles.yAxis} ref={(node) => d3.select(node).call(yAxis)} style={{fontSize: "2.2rem", strokeWidth: "1px", strokeOpacity: 0.2}} />
          <g className="y-grid" ref={(node) => d3.select(node).call(yGrid)} style={{stroke: "red", strokeWidth: "1px", strokeOpacity: 0.5}}/>
        </g>
      </svg>
    </div>
  );
};
export default BarChart;