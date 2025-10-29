import * as d3 from 'd3';
const BarChart = ({ data, width, height, date }) => {
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const barWidth = chartWidth/data.length;
  const x = d3
    .scaleTime()
    .domain(d3.extent(data, d => new Date(d.endDate)))
    .range([0, chartWidth])
  const y = d3.scaleLinear().domain([0, d3.max(data, (d) => d.value)]).range([chartHeight, 0]);

  const xAxis = d3.axisBottom(x)
  .ticks(20)
  .tickFormat(d3.timeFormat("%H:%M"))
  const yAxis = d3.axisLeft(y)

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {data.map((d,i) => (
          <rect
            key={d.key}
            x={x(new Date(d.endDate))}
            y={y(d.value)}
            width={barWidth}
            height={chartHeight - y(d.value)}
            fill={(date > new Date(d.startDate) && date < new Date(d.endDate)) ? d3.rgb(55, 0, 255, 1) : d3.rgb(80, 80, 80)}
          />
        ))}
        <g
          className="x-axis"
          transform={`translate(0,${chartHeight})`}
          ref={(node) => d3.select(node).call(xAxis)}
        />
        <g className="y-axis" ref={(node) => d3.select(node).call(yAxis)} />
      </g>
    </svg>
  );
};
export default BarChart;