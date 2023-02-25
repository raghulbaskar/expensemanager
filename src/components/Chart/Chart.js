import React from "react";
import ChartBar from './ChartBar'
import './Chart.css'
const Chart = props => {
    const arr = props.items.map( x => x.value);
    const maxval = Math.max(...arr)
    return <div className="chart">
        {
            props.items.map(data => <ChartBar 
                value={data.value}
                 label={data.label}
                  maxValue ={maxval}
                  key ={data.label}
                  />)
        }
    </div>
}
export default Chart;